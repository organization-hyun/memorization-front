import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function QuizComponent({quiz}) {
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
    };

    const handleSubmit = () => {
    };

    return (
        <Box maxWidth={400} margin="auto" marginTop={3} padding={2} border={1} borderColor="grey.400">
            <Typography variant="h6">{getQuizType(quiz.type)}</Typography>
            <Typography variant="body1">{`quizText:${quiz.quizText}`}</Typography>
            <TextField
                fullWidth
                label="Answer"
                variant="outlined"
                value={answer}
                onChange={handleChange}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Box>
    );
}

export default QuizComponent;