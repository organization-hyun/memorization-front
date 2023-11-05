import {useParams} from "react-router";
import {API_BASE_URL} from "../app-config";
import {useEffect, useState} from "react";
import TermsTable from "../common/TermsTable";
import {Container} from "@mui/material";
import AddTerm from "../term/AddTerm";
import GlossarySetting from "../component/GlossarySetting";

function Detail() {
    const {id,title} = useParams();

    const [terms, setTerms] = useState([]);

    useEffect(() => {
        getTerms();
    }, [])

    const getTerms = async () => {
        const response = await ((await fetch(
            `${API_BASE_URL}/glossaries/${id}/terms`
        )).json());

        setTerms(response.terms);
    };

    const addTerm = (term) => {
        setTerms((prev) => [...prev, term]);
    };

    const deleteTerm = (id) => {
        const newTerms = terms.filter((prev) => prev.id !== id)
        setTerms(newTerms);
    };

    return (
        <Container>
            <GlossarySetting glossaryId={id} title={title}/>
            <AddTerm glossaryId={id} addTerm={addTerm}/>
            <TermsTable deleteTerm={deleteTerm} terms={terms}/>
        </Container>
    )
        ;
}

export default Detail;