import {IconButton, InputBase} from "@material-ui/core";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid} from "@mui/material";
import {Delete} from "@material-ui/icons";

const ExamHistory = ({examHistory, remove}) => {

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleDeleteButtonOpen = () => {
        setDeleteModalOpen(true);
    }

    const handleDeleteButtonClose = () => {
        setDeleteModalOpen(false);
    };

    const confirmDelete = () => {
        remove(examHistory.id)
    }

    return (
        <>
            <Grid container>
                <Grid xs={11} md={11} item style={{paddingLeft: 16, paddingRight: 16}}>
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
                </Grid>
                <Grid xs={1} md={1} item>
                    <IconButton onClick={(handleDeleteButtonOpen)}>
                        <Delete/>
                    </IconButton>
                    <Dialog open={deleteModalOpen} onClose={handleDeleteButtonClose}>
                        <DialogContent>
                            <DialogContentText>
                                정말로 삭제하시겠습니까?
                            </DialogContentText>
                            <DialogActions>
                                <Button onClick={confirmDelete}>예</Button>
                                <Button onClick={handleDeleteButtonClose}>아니오</Button>
                            </DialogActions>
                        </DialogContent>
                    </Dialog>
                </Grid>
            </Grid>
        </>
    );
}

export default ExamHistory;