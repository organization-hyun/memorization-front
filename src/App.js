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

    // componentDidMount() {
    //     call("/glossaries", "GET", null).then((response) => {
    //         console.log("이 녀석", response);
    //         this.setState({glossaries: response.glossaries});
    //     });
    // }

    add = (glossary) => {
        call("/glossaries", "POST", glossary).then((response) => {
            const thisGlossaries = this.state.glossaries;
            glossary.id = response;
            glossary.done = false;
            thisGlossaries.push(glossary);
            this.setState({glossaries: thisGlossaries})
        })
    }

    // delete = (glossary) => {
    //     call("/glossaries", "DELETE", glossary).then((response) => {
    //         this.setState({items: response.data})
    //     })
    // }

    /*add = (glossary) => {
        const thisGlossaries = this.state.glossaries;
        glossary.id = "ID-" + thisGlossaries.length; // key를 위한 id 추가
        glossary.done = false; // done 초기화
        thisGlossaries.push(glossary); // 리스트에 아이템 초기화
        this.setState({glossaries: thisGlossaries}); // 업데이트는 반드시 this.setState를 통해 진행
        console.log("glossaries: ", this.state.glossaries);
    }*/

    delete = (glossary) => {
        const thisGlossaries = this.state.glossaries;
        console.log("Before Update Glossaries : ", this.state.glossaries);
        const newGlossaries = thisGlossaries.filter(e => e.id !== glossary.id);
        this.setState({glossaries: newGlossaries}, () => {
            // 디버깅 콜백
            console.log("Update Items : ", this.state.glossaries);
        });
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
