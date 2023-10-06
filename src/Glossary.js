import React, {useState} from 'react';
import {IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const Glossary = (props) => {

    const [id] = useState(props.glossary.id);
    const [title, setTitle] = useState(props.glossary.title);

    const update = props.update;
    const remove = props.remove;

    const editEventHandler = (e) => {
        setTitle(e.target.value);
    }

    const deleteEventHandler = () => {
        remove(id);
    }

    const enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            update({
                id: id,
                title: title
            });
        }
        setTitle(title);
    }

    return (
        <ListItem>
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                    }}
                    type="text"
                    id={id} // 각 리스트를 구분하려고 id를 연결
                    name={id} // 각 리스트를 구분하려고 id를 연결
                    value={title}
                    multiline={true}
                    fullWidth={true}
                    onChange={editEventHandler}
                    onKeyDown={enterKeyEventHandler}
                />
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton
                    aria-label="Delete Glossary"
                    onClick={deleteEventHandler}>
                    <DeleteOutlined/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Glossary;