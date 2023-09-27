import React from 'react';
import Todo from "./Todo";
import {Container, List, Paper} from "@material-ui/core";
import "./App.css"
import AddTodo from "./AddTodo";
import {call} from "./service/ApiService";

function App() {

    const [glossaries, setGlossaries] = React.useState([]);

    React.useEffect(() => {
        call("/glossaries", "GET", null).then((response) => {
            {
                setGlossaries(response.glossaries);
            }
        });
    })

    const add = (glossary) => {
        call("/glossaries", "POST", glossary).then((response) => {
            const thisGlossaries = this.state.glossaries;
            glossary.id = response;
            glossary.done = false;
            thisGlossaries.push(glossary);
            this.setState({glossaries: thisGlossaries})
        })
    }

    const update = (glossary) => {
        call("/glossaries/" + glossary.id, "PUT", glossary);
        const thisGlossaries = this.state.glossaries;
        const newGlossaries = thisGlossaries.map(e => {
            if (e.id !== glossary.id) {
                e.title = glossary.title;
            }
        });
        this.setState({glossaries: newGlossaries});
    }

    const remove = (id) => {
        call("/glossaries/" + id, "DELETE", id);
        const thisGlossaries = this.state.glossaries;
        const newGlossaries = thisGlossaries.filter(e => e.id !== id);
        this.setState({glossaries: newGlossaries});
    }

    return (
        <div className="App">
            <Container maxWidth="md">
                <AddTodo add={add}/>
                <div className="TodoList">
                    <Paper style={{margin: 16}}>
                        <List>
                            {glossaries.map((glossary) => (
                                <Todo glossary={glossary} key={glossary.id} update={update} remove={remove}/>
                            ))}
                        </List>
                    </Paper>
                </div>
            </Container>
        </div>
    );

}

export default App;
