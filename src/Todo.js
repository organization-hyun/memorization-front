import React from 'react';
import {Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {item: props.item, readOnly: true};
        this.delete = props.delete;
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
    }

    // 함수 추가
    deleteEventHandler = () => {
        this.delete(this.state.item);
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
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({item: thisItem});
    }

    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done}
                          onChange={this.checkboxEventHandler}
                          disableRipple/>
                <ListItemText>
                    <InputBase
                        inputProps={{
                            "aria-label": "naked",
                            readOnly: this.state.readOnly,
                        }}
                        type="text"
                        id={item.id} // 각 리스트를 구분하려고 id를 연결
                        name={item.id} // 각 리스트를 구분하려고 id를 연결
                        value={item.title}
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