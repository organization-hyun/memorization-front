import {useParams} from "react-router";
import {API_BASE_URL} from "../app-config";
import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";
import QuizHistory from "../component/QuizHistory";
import GoBackButton from "../common/GoBackButton";

export default function QuizHistories() {
    const {examHistoryId} = useParams();

    const [quizHistories, setQuizHistories] = useState([]);

    useEffect(() => {
        getQuizzes();
    }, [])

    const getQuizzes = async () => {
        const response = await ((await fetch(
            `${API_BASE_URL}/exam/histories/${examHistoryId}`
        )).json());

        setQuizHistories(response.quizHistories);
    }

    return (
        <>
            <GoBackButton/>
            <Box margin="auto">
                {quizHistories.map(quizHistory => {
                    return <QuizHistory key={quizHistory.id} quizHistory={quizHistory}/>
                })}
            </Box>
        </>
    );
}