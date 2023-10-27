import {useParams} from "react-router";
import {API_BASE_URL} from "../app-config";
import React, {useEffect, useState} from "react";
import Quiz from "../component/Quiz";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";

function QuizSheet() {
    const {id} = useParams();

    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        getQuizzes();
    }, [])

    const getQuizzes = async () => {
        const response = await ((await fetch(
            `${API_BASE_URL}/glossaries/${id}/quizzes`
        )).json());

        setQuizzes(response.quizzes);
    }

    const handleSubmit = () => {
    };

    return (
        <>
            <Box margin="auto">
                {quizzes.map(quiz => {
                    return <Quiz quiz={quiz}/>
                })}
                <div style={{marginTop: 12, display: 'flex', justifyContent: 'center'}}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        제출
                    </Button>
                </div>
            </Box>
        </>
    );
}

export default QuizSheet;