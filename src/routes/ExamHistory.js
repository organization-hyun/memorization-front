import {useParams} from "react-router";
import {API_BASE_URL} from "../app-config";
import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";
import ExamHistoryItem from "../component/ExamHistoryItem";

export default function ExamHistory() {
    const {examHistoryId} = useParams();

    const [examHistoryItems, setExamHistoryItems] = useState([]);

    useEffect(() => {
        getQuizzes();
    }, [])

    const getQuizzes = async () => {
        const response = await ((await fetch(
            `${API_BASE_URL}/exam-histories/${examHistoryId}/items`
        )).json());

        setExamHistoryItems(response.examHistoryItems);
    }

    return (
        <>
            <Box margin="auto">
                {examHistoryItems.map(examHistoryItem => {
                    return <ExamHistoryItem key={examHistoryItem.id} examHistoryItem={examHistoryItem}/>
                })}
            </Box>
        </>
    );
}