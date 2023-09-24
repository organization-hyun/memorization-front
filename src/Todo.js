import React from 'react';
import {Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            glossary: props.glossary,
            readOnly: true
        };
        this.delete = props.delete;
    }

    editEventHandler = (e) => {
        const thisGlossary = this.state.glossary;
        thisGlossary.title = e.target.value;
        this.setState({glossary: thisGlossary});
    }

    // 함수 추가
    deleteEventHandler = () => {
        this.delete(this.state.glossary);
    }

    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly)
        this.setState({readOnly: false}, () => {
            console.log("ReadOnly?", this.state.readOnly);
        });
    }

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            this.setState({readOnly: true});
        }
    }

    checkboxEventHandler = (e) => {
        const thisGlossary = this.state.glossary;
        thisGlossary.done = !thisGlossary.done;
        this.setState({glossary: thisGlossary});
    }

    render() {
        const glossary = this.state.glossary;
        return (
            <ListItem>
                <Checkbox checked={glossary.done}
                          onChange={this.checkboxEventHandler}
                          disableRipple/>
                <ListItemText>
                    <InputBase
                        inputProps={{
                            "aria-label": "naked",
                            readOnly: this.state.readOnly,
                        }}
                        type="text"
                        id={glossary.id} // 각 리스트를 구분하려고 id를 연결
                        name={glossary.id} // 각 리스트를 구분하려고 id를 연결
                        value={glossary.title}
                        multiline={true}
                        fullWidth={true}
                        onClick={this.offReadOnlyMode}
                        onChange={this.editEventHandler}
                        onKeyPress={this.enterKeyEventHandler}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;