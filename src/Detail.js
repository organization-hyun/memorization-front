import {useParams} from "react-router";

function Detail() {
    const params = useParams();
    return (
        <div>
            넘겨 받은 id : {params.id}
            디테일 페이지입니다.
        </div>
    );
}

export default Detail;