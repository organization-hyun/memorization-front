import {useParams} from "react-router";
import {API_BASE_URL} from "../app-config";
import {useEffect, useState} from "react";

function Quiz() {
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

    return (
        <div>Quiz</div>
    );
}

export default Quiz;