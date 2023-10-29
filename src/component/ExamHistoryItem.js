import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ExamHistoryItem({examHistoryItem}) {

    const getQuizType = (quizType) => {
        if (quizType === "WORD") {
            return "단어를 보고 뜻을 적어주세요.";
        }

        if (quizType === "DESCRIPTION") {
            return "설명을 보고 단어를 적어주세요."
        }
    };

    return (
        <Box maxWidth={400} margin="auto" marginTop={3} padding={2} border={1} borderColor="grey.400">
            <Typography variant="h6">{getQuizType(examHistoryItem.type)}</Typography>
            <Typography variant="body1">{examHistoryItem.question}</Typography>
            <TextField
                fullWidth
                label="Answer"
                variant="outlined"
                value={examHistoryItem.userAnswer}
                disabled
            />
        </Box>
    );
}