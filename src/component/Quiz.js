import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function QuizComponent({quiz}) {
    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = () => {
    };

    return (
        <Box maxWidth={400} margin="auto" padding={2} border={1} borderColor="grey.400">
            <Typography variant="h6">{quiz.type}</Typography>
            {/*<Typography variant="body1">{`quizText: ${quizText}`}</Typography>*/}
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