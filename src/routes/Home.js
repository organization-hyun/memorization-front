import React, {useEffect, useState} from 'react';
import Glossary from "../Glossary";
import {Container, InputBase, List, Paper} from "@material-ui/core";
import AddGlossary from "../AddGlossary";
import {call} from "../service/ApiService";
import {API_BASE_URL} from "../app-config";
import {Link} from "react-router-dom";

function Home() {

    const [glossaries, setGlossaries] = useState([]);
    const [examHistories, setExamHistories] = useState([]);

    const getGlossaries = async () => {
        const response = await ((await fetch(
            `${API_BASE_URL}/glossaries`
        )).json());
        setGlossaries(response.glossaries);
    }

    const getExamHistories = async () => {
        const response = await ((await fetch(
            `${API_BASE_URL}/exam-histories`
        )).json());
        setExamHistories(response.examHistories);
    }

    useEffect(() => {
        getGlossaries();
        getExamHistories();
    }, []);

    const add = (glossary) => {
        call(`${API_BASE_URL}/glossaries`, "POST", glossary).then((response) => {
            const newGlossary = {
                id: response,
                title: glossary.title,
            }
            setGlossaries(prevGlossaries => ([...prevGlossaries, newGlossary]));
        })
    }

    const remove = (id) => {
        call(`${API_BASE_URL}/glossaries/${id}`, "DELETE", id);
        const newGlossaries = glossaries.filter((g) => g.id !== id);
        setGlossaries(newGlossaries);
    }

    return (
        <Container maxWidth="md">
            <AddGlossary glossaries={glossaries} add={add}/>
            <div>
                <Paper style={{margin: 16}}>
                    <List>
                        {glossaries.map((v) => (
                            <Glossary key={v.id} glossary={v} remove={remove}/>
                        ))}
                    </List>
                </Paper>
            </div>
            <div>
                <Paper style={{margin: 16}}>
                    <h1 style={{margin: 12}}>History</h1>
                    <List>
                        {examHistories.map((examHistory) => (
                            <Link to={`/exam-histories/${examHistory.id}`} key={examHistory.id}>
                                <div style={{margin: 12}}>
                                    <InputBase
                                        inputProps={{
                                            "aria-label": "naked",
                                        }}
                                        type="text"
                                        value={examHistory.title}
                                        multiline
                                        fullWidth
                                    />
                                </div>
                                {/*<div style={{margin: 16}} key={examHistory.id}>{examHistory.title}</div>*/}
                            </Link>
                        ))}
                    </List>
                </Paper>
            </div>
        </Container>
    );

}

export default Home;
