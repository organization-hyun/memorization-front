import {useParams} from "react-router";
import {API_BASE_URL} from "../app-config";
import React, {useEffect, useState} from "react";
import Quiz from "../component/Quiz";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import {call} from "../service/ApiService";
import {useNavigate} from "react-router-dom";

function QuizSheet() {
    const navigate = useNavigate();
    const {glossaryId} = useParams();

    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        getQuizzes();
    }, [])

    const getQuizzes = async () => {
        const response = await ((await fetch(
            `${API_BASE_URL}/glossaries/${glossaryId}/exam`
        )).json());

        setQuizzes(response.quizzes);
    }

    const handleSubmit = async () => {
        const examHistoryId = await (await (await call(`${API_BASE_URL}/glossaries/${glossaryId}/exam`, "POST", {
            answerSheet: [
                {
                    termId: "1",
                    quizType: "DESCRIPTION",
                    userAnswer: "용어1"
                }
            ]
        })).json()).examHistoryId;

        navigate(`/histories/${examHistoryId}`);
    };

    return (
        <>
            <Box margin="auto">
                {quizzes.map(quiz => {
                    return <Quiz key={quiz.id} quiz={quiz}/>
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