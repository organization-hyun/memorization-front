import {useParams} from "react-router";
import {API_BASE_URL} from "../app-config";
import {useEffect, useState} from "react";

function Detail({title}) {
    const {id} = useParams();

    const [terms, setTerms] = useState([]);

    const getTerms = async () => {
        const response = await ((await fetch(
            `${API_BASE_URL}/glossaries/${id}/terms`
        )).json());

        setTerms(response.terms);
    }


    useEffect(() => {
        getTerms();
    }, [])

    return (
        <>
            <div>
                용어집 이름: {title}
            </div>
            <hr/>
            <div>
                {terms.map((term) =>
                    <div key={term.id}>
                        <span>{term.word}</span>
                        <span>{term.description}</span>
                        <span>{term.keywords}</span>
                        <button>등록</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Detail;