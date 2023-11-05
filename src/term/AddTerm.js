import React, {useState} from "react";
import {Button, Grid, Paper, TextField} from "@material-ui/core";
import {API_BASE_URL} from "../app-config";
import {call} from "../service/ApiService";

const AddTerm = ({glossaryId, addTerm}) => {
    const [word, setWord] = useState("");
    const [description, setDescription] = useState("");
    const [keywords, setKeywords] = useState([""]);

    const handleInputChange = (e, index) => {
        const newKeywords = [...keywords];
        newKeywords[index] = e.target.value;
        setKeywords(newKeywords);

        if (index === newKeywords.length - 1 && e.target.value.trim() !== "") {
            newKeywords.push("");
            setKeywords(newKeywords);
        }
    };

    const handleAddTermButtonClick = async () => {
        const termId = await call(`${API_BASE_URL}/glossaries/${glossaryId}/terms`, "POST", {
            word: word,
            description: description,
            keywords: keywords.filter((keyword) => keyword.trim() !== ""),
        });

        addTerm({
            id: await termId.json(),
            word: word,
            description: description,
            keywords: keywords.filter((keyword) => keyword.trim() !== ""),
        });

        setWord("");
        setDescription("");
        setKeywords([""]);
    };

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
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        placeholder="설명"
                        multiline
                        size="small"
                        variant="outlined"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {keywords.map((keyword, index) => (
                        <TextField
                            key={index}
                            placeholder={`키워드${index + 1}`}
                            multiline
                            size="small"
                            variant="outlined"
                            value={keyword}
                            onChange={(e) => handleInputChange(e, index)}
                        />
                    ))}
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button
                        fullWidth
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
};

export default AddTerm;