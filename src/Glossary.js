import React, {useState} from 'react';
import {InputBase, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";

const Glossary = ({glossary, remove}) => {

  const [id] = useState(glossary.id);
  const [title] = useState(glossary.title);

  const deleteEventHandler = () => {
    remove(id);
  }

  return (
    <Grid container>
      <Grid xs={11} md={11} item style={{paddingLeft: 16, paddingRight: 16}}>
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
        <Button variant="outlined" onClick={deleteEventHandler}>삭제</Button>
      </Grid>
    </Grid>
  );
}

export default Glossary;