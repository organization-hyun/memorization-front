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
        <div>
            {quizzes.map(quiz => {
                return (
                    <div key={quiz.id}>
                        <div>
                            {quiz.type}
                        </div>
                        <div>
                            {quiz.quizText}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Quiz;