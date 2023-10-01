import React from 'react';
import Glossary from "./Glossary";
import {Container, List, Paper} from "@material-ui/core";
import "./App.css"
import AddGlossary from "./AddGlossary";
import {call} from "./service/ApiService";

function App() {

    const [glossaries, setGlossaries] = React.useState([]);

    React.useEffect(() => {
        call("/glossaries", "GET", null).then((response) => {
            setGlossaries(response.glossaries);
        });
    }, [])

    const add = (glossary) => {
        call("/glossaries", "POST", glossary).then((response) => {
            glossary.id = response;
            glossary.done = false;
            glossaries.push(glossary);
            setGlossaries(glossaries);
        })
    }

    const update = (glossary) => {
        call("/glossaries/" + glossary.id, "PUT", glossary);
        const newGlossaries = glossaries.map(e => {
            if (e.id === glossary.id) {
                e.title = glossary.title;
            }
        });
        setGlossaries(newGlossaries);
    }

    const remove = (id) => {
        call("/glossaries/" + id, "DELETE", id);
        const newGlossaries = glossaries.filter(e => e.id !== id);
        setGlossaries(newGlossaries);
    }

    return (
        <div className="App">
            <Container maxWidth="md">
                <AddGlossary add={add}/>
                <div className="GlossaryList">
                    <Paper style={{margin: 16}}>
                        <List>
                            {glossaries.map((v, i) => (
                                <Glossary key={i} glossary={v} update={update} remove={remove}/>
                            ))}
                        </List>
                    </Paper>
                </div>
            </Container>
        </div>
    );

}

export default App;
