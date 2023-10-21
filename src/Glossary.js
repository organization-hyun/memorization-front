import React, {useState} from 'react';
import {InputBase, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {ListItemButton} from "@mui/material";
import {Link} from "react-router-dom";
import Button from "./common/Button";

const Glossary = ({glossary, update, remove}) => {

    const [id] = useState(glossary.id);
    const [title, setTitle] = useState(glossary.title);

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
        <Link to={`/glossaries/${id}`}>
            <ListItemButton>
                <ListItemText>
                    <InputBase
                        inputProps={{
                            "aria-label": "naked",
                        }}
                        type="text"
                        value={title}
                        multiline={true}
                        fullWidth={true}
                        onChange={editEventHandler}
                        onKeyDown={enterKeyEventHandler}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    {/*<IconButton*/}
                    {/*    aria-label="Delete Glossary"*/}
                    {/*    onClick={deleteEventHandler}>*/}
                    {/*    <DeleteOutlined/>*/}
                    {/*</IconButton>*/}
                    <Button color="black">삭제</Button>
                </ListItemSecondaryAction>
            </ListItemButton>
        </Link>

    );
}

export default Glossary;