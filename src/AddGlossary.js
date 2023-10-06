import React, {useState} from "react";
import {Button, Grid, Paper, TextField} from "@material-ui/core";

const AddGlossary = (props) => {

    const [inputValue, setInputValue] = useState('');

    const add = props.add;

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onButtonClick = (e) => {
        add({
            title: inputValue
        });
        setInputValue('');
    }

    const enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    }

    return (
        <Paper style={{margin: 16, padding: 16}}>
            <Grid container>
                <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                    <TextField
                        placeholder="Add Glossary here"
                        fullWidth
                        onChange={onInputChange}
                        value={inputValue}
                        onKeyPress={enterKeyEventHandler}
                    />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button fullWidth
                            color="secondary"
                            variant="outlined"
                            onClick={onButtonClick}
                    >
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );

}

export default AddGlossary;