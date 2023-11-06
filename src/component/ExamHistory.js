import {InputBase} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";

const ExamHistory = ({examHistory}) => {
    return (
        <>
            <Link to={`/exam-histories/${examHistory.id}`} key={examHistory.id}>
                <div style={{margin: 12}}>
                    <InputBase
                        inputProps={{
                            "aria-label": "naked",
                        }}
                        type="text"
                        value={examHistory.title}
                        multiline
                        fullWidth
                    />
                </div>
            </Link>
        </>
    );
}

export default ExamHistory;