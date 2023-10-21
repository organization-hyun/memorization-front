import {useParams} from "react-router";
import {API_BASE_URL} from "../app-config";
import {useEffect, useState} from "react";
import TermsTable from "../common/TermsTable";

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
      <TermsTable headers={["word", "description", "keyword1", "keyword2", "keyword3"]} terms={terms}/>
    </>
  )
    ;
}

export default Detail;