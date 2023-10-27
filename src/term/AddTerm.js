import React, {useState} from "react";
import {Button, Grid, Paper, TextField} from "@material-ui/core";
import {API_BASE_URL} from "../app-config";
import {call} from "../service/ApiService";

const AddTerm = ({glossaryId, addTerm}) => {

    const [word, setWord] = useState('');
    const [description, setDescription] = useState('');
    const [keyword1, setKeyword1] = useState('');
    const [keyword2, setKeyword2] = useState('');
    const [keyword3, setKeyword3] = useState('');

    const handleInputChange = (e, setValue) => {
        setValue(e.target.value);
    }

    const handleAddTermButtonClick = async () => {
        const termId = await call(`${API_BASE_URL}/glossaries/${glossaryId}/terms`, "POST", {
            word: word,
            description: description,
            keywords: [keyword1, keyword2, keyword3]
        });

        addTerm({
            id: await termId.json(),
            word: word,
            description: description,
            keywords: [keyword1, keyword2, keyword3]
        });
        setWord('');
        setDescription('');
        setKeyword1('');
        setKeyword2('');
        setKeyword3('');
    }

    return (
        <Paper style={{margin: 16, padding: 16}}>
            <Grid container>
                <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                    <TextField
                        placeholder="용어"
                        multiline
                        size="small"
                        variant="outlined"
                        value={word}
                        onChange={(e) => handleInputChange(e, setWord)}
                    />
                    <TextField
                        placeholder="설명"
                        multiline
                        size="small"
                        variant="outlined"
                        value={description}
                        onChange={(e) => handleInputChange(e, setDescription)}/>
                    <TextField
                        placeholder="키워드1"
                        multiline
                        size="small"
                        variant="outlined"
                        value={keyword1}
                        onChange={(e) => handleInputChange(e, setKeyword1)}/>
                    <TextField
                        placeholder="키워드2"
                        multiline
                        size="small"
                        variant="outlined"
                        value={keyword2}
                        onChange={(e) => handleInputChange(e, setKeyword2)}/>
                    <TextField
                        placeholder="키워드3"
                        multiline
                        size="small"
                        variant="outlined"
                        value={keyword3}
                        onChange={(e) => handleInputChange(e, setKeyword3)}/>
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button fullWidth
                            color="primary"
                            variant="outlined"
                            onClick={handleAddTermButtonClick}
                    >
                        등록
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );

}

export default AddTerm;