import {Grid, Paper} from "@mui/material";
import {Button, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {call} from "../service/ApiService";
import {API_BASE_URL} from "../app-config";
import GoBackButton from "../common/GoBackButton";

// TODO 추후 로직 추가
const GlossarySetting = ({glossaryId, title}) => {

    const [glossaryTitle, setGlossaryTitle] = useState(title);

    const handleTitleChange = (e) => {
        setGlossaryTitle(e.target.value);
    }

    const handleTitleEditButtonClick = () => {
        call(`${API_BASE_URL}/glossaries/${glossaryId}`, "PUT", {
            title: glossaryTitle
        });
    }

    return (
        <div>
            <GoBackButton/>
            <Paper style={{margin: 16, padding: 16}}>
                <h4>용어집 이름</h4>
                <Grid container>
                    <Grid xs={2} md={2} item style={{paddingRight: 16}}>
                        <TextField
                            multiline
                            size="small"
                            variant="outlined"
                            value={glossaryTitle}
                            onChange={handleTitleChange}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth
                                color="primary"
                                variant="outlined"
                                onClick={handleTitleEditButtonClick}
                        >
                            수정
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default GlossarySetting;