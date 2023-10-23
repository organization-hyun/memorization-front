import React, {useEffect, useState} from 'react';
import Glossary from "../Glossary";
import {Container, List, Paper} from "@material-ui/core";
import AddGlossary from "../AddGlossary";
import {call} from "../service/ApiService";
import {API_BASE_URL} from "../app-config";

function Home() {

    const [glossaries, setGlossaries] = useState([]);

    const getGlossaries = async () => {
        const response = await ((await fetch(
            `${API_BASE_URL}/glossaries`
        )).json());
        setGlossaries(response.glossaries);
    }

    useEffect(() => {
        getGlossaries()
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
                <div className="GlossaryList">
                    <Paper style={{margin: 16}}>
                        <List>
                            {glossaries.map((v) => (
                                <Glossary key={v.id} glossary={v} remove={remove}/>
                            ))}
                        </List>
                    </Paper>
                </div>
            </Container>
    );

}

export default Home;
