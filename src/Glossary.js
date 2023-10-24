import React, {useState} from 'react';
import {IconButton, InputBase, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Grid} from "@mui/material";
import {Delete, PlayArrow} from "@material-ui/icons";

const Glossary = ({glossary, remove}) => {

    const [id] = useState(glossary.id);
    const [title] = useState(glossary.title);

    const deleteEventHandler = () => {
        remove(id);
    }

    return (
        <Grid container>
            <Grid xs={10} md={10} item style={{paddingLeft: 16, paddingRight: 16}}>
                <Link to={`/glossaries/${id}`}>
                    <ListItemText>
                        <InputBase
                            inputProps={{
                                "aria-label": "naked",
                            }}
                            type="text"
                            value={title}
                            multiline
                            fullWidth
                        />
                    </ListItemText>
                </Link>
            </Grid>
            <Grid xs={1} md={1} item>
                <Link to={`/glossaries/${id}/quiz`}>
                    <IconButton>
                        <PlayArrow/>
                    </IconButton>
                </Link>
            </Grid>
            <Grid xs={1} md={1} item>
                <IconButton onClick={deleteEventHandler} aria-label="delete">
                    <Delete/>
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default Glossary;