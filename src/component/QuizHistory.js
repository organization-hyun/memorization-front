import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function QuizHistory({quizHistory}) {

    const getQuizType = (quizType) => {
        if (quizType === "WORD") {
            return "단어를 보고 뜻을 적어주세요.";
        }

        if (quizType === "DESCRIPTION") {
            return "설명을 보고 단어를 적어주세요."
        }
    };

    return (
        <Box maxWidth={400} margin="auto" marginTop={3} padding={2} border={1}
             borderColor={quizHistory.isCorrect ? "green" : "red"}>
            <Typography variant="h6">{getQuizType(quizHistory.type)}</Typography>
            <Typography variant="body1">{quizHistory.question}</Typography>
            <TextField
                fullWidth
                label="Answer"
                variant="outlined"
                value={quizHistory.userAnswer}
                disabled
                multiline
            />
        </Box>
    );
}