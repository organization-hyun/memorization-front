import {useParams} from "react-router";
import {API_BASE_URL} from "../app-config";
import {useEffect, useState} from "react";

function Detail({title}) {
    const params = useParams();

    const [terms, setTerms] = useState([]);

    const getTerms = async () => {
        const response = await ((await fetch(
            `${API_BASE_URL}/glossaries/${params.id}/terms`
        )).json());

        setTerms(response.terms);
    }


    useEffect(() => {
        getTerms();
    }, [])

    return (
        <div>
            용어집 이름: {title}
        </div>
    );
}

export default Detail;