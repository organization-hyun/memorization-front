import React, {useEffect, useState} from 'react';
import Glossary from "../component/Glossary";
import {Container, List, Paper} from "@material-ui/core";
import AddGlossary from "../component/AddGlossary";
import {call} from "../service/ApiService";
import {API_BASE_URL} from "../app-config";
import ExamHistory from "../component/ExamHistory";

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
            `${API_BASE_URL}/exam/histories`
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

    const deleteGlossary = (id) => {
        call(`${API_BASE_URL}/glossaries/${id}`, "DELETE", id);
        const newGlossaries = glossaries.filter((g) => g.id !== id);
        setGlossaries(newGlossaries);
    }

    const deleteExamHistory = (id) => {
        call(`${API_BASE_URL}/exam/histories/${id}`, "DELETE", id);
        const newExamHistories = examHistories.filter((h) => h.id !== id);
        setExamHistories(newExamHistories);
    }

    return (
        <Container maxWidth="md">
            <AddGlossary glossaries={glossaries} add={add}/>
            <div>
                <Paper style={{margin: 16}}>
                    <List>
                        {glossaries.map((v) => (
                            <Glossary key={v.id} glossary={v} remove={deleteGlossary}/>
                        ))}
                    </List>
                </Paper>
            </div>
            <div>
                <Paper style={{margin: 16}}>
                    <h1 style={{margin: 12}}>History</h1>
                    <List>
                        {examHistories.map((e) => (
                            <ExamHistory key={e.id} examHistory={e} remove={deleteExamHistory}/>
                        ))}
                    </List>
                </Paper>
            </div>
        </Container>
    );

}

export default Home;
