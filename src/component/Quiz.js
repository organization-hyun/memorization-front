import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function QuizComponent({quiz, setUserAnswer}) {
    const [answer, setAnswer] = useState('');

    const getQuizType = (quizType) => {
        if (quizType === "WORD") {
            return "단어를 보고 뜻을 적어주세요.";
        }

        if (quizType === "DESCRIPTION") {
            return "설명을 보고 단어를 적어주세요."
        }
    };

    const handleChange = (event) => {
        setAnswer(event.target.value);
        setUserAnswer(quiz.id, event.target.value);
    };

    return (
        <Box maxWidth={400} margin="auto" marginTop={3} padding={2} border={1} borderColor="grey.400">
            <Typography variant="body1">{getQuizType(quiz.quizType)}</Typography>
            <Typography variant="body1">{quiz.question}</Typography>
            <TextField
                fullWidth
                label="Answer"
                variant="outlined"
                value={answer}
                onChange={handleChange}
                multiline
            />
        </Box>
    );
}

export default QuizComponent;