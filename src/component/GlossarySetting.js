import {Grid, Paper} from "@mui/material";
import {Button, TextField} from "@material-ui/core";
import React from "react";

// TODO 추후 로직 추가
const GlossarySetting = ({title}) => {
  return (
    <Paper style={{margin: 16, padding: 16}}>
      <h4>용어집 이름</h4>
      <Grid container>
        <Grid xs={2} md={2} item style={{paddingRight: 16}}>
          <TextField
            multiline
            size="small"
            variant="outlined"
            value={title}
          />
        </Grid>
        <Grid xs={1} md={1} item>
          <Button fullWidth
                  color="primary"
                  variant="outlined"
          >
            수정
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default GlossarySetting;