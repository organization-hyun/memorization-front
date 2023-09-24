import React from 'react';
import Todo from "./Todo";
import {Container, List, Paper} from "@material-ui/core";
import "./App.css"
import AddTodo from "./AddTodo";
import {call} from "./service/ApiService";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            glossaries: []
        };
    }

    componentDidMount() {
        call("/glossaries", "GET", null).then((response) => {
            this.setState({glossaries: response.glossaries});
        });
    }

    add = (glossary) => {
        call("/glossaries", "POST", glossary).then((response) => {
            const thisGlossaries = this.state.glossaries;
            glossary.id = response;
            glossary.done = false;
            thisGlossaries.push(glossary);
            this.setState({glossaries: thisGlossaries})
        })
    }

    delete = (id) => {
        call("/glossaries/" + id, "DELETE", id).then((response) => {
            this.setState({items: response.data})
        })
        const thisGlossaries = this.state.glossaries;
        const newGlossaries = thisGlossaries.filter(e => e.id !== id);
        this.setState({glossaries: newGlossaries});
    }

    render() {
        var todoGlossaries = this.state.glossaries.length > 0 && (
            <Paper style={{margin: 16}}>
                <List>
                    {this.state.glossaries.map((glossary, idx) => (
                        <Todo glossary={glossary} key={glossary.id} delete={this.delete}/>
                    ))}
                </List>
            </Paper>
        );

        return (
            <div className="App">
                <Container maxWidth="md">
                    <AddTodo add={this.add}/>
                    <div className="TodoList">{todoGlossaries}</div>
                </Container>
            </div>
        )

    }
}

export default App;
