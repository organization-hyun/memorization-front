import React from 'react';
import Glossary from "./Glossary";
import {Container, List, Paper} from "@material-ui/core";
import "./App.css"
import AddGlossary from "./AddGlossary";
import {call} from "./service/ApiService";
import Gugudan from "./practice/Gugudan";

function App() {

    const [glossaries, setGlossaries] = React.useState([]);

    React.useEffect(() => {
        call("/glossaries", "GET", null).then((response) => {
            {setGlossaries(response.glossaries);}
        });
    }, [])

    const add = (glossary) => {
        call("/glossaries", "POST", glossary).then((response) => {
            const thisGlossaries = glossaries;
            glossary.id = response;
            glossary.done = false;
            thisGlossaries.push(glossary);
            setGlossaries(thisGlossaries)
        })
    }

    const update = (glossary) => {
        call("/glossaries/" + glossary.id, "PUT", glossary);
        const thisGlossaries = glossaries;
        const newGlossaries = thisGlossaries.map(e => {
            if (e.id !== glossary.id) {
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
                <Gugudan/>
                <AddGlossary add={add}/>
                <div className="GlossaryList">
                    <Paper style={{margin: 16}}>
                        <List>
                            {glossaries.map(glossary => (
                                <Glossary glossary={glossary} update={update} remove={remove}/>
                            ))}
                        </List>
                    </Paper>
                </div>
            </Container>
        </div>
    );

}

export default App;
