import React, {useState} from 'react';
import {IconButton, InputBase, ListItemText} from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid} from "@mui/material";
import {Delete, PlayArrow} from "@material-ui/icons";

const Glossary = ({glossary, remove}) => {
    const navigate = useNavigate();

    const [id] = useState(glossary.id);
    const [title] = useState(glossary.title);

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [examModalOpen, setExamModalOpen] = useState(false);

    const deleteEventHandler = () => {
        setDeleteModalOpen(true);
    }

    const confirmDelete = () => {
        remove(id);
        setDeleteModalOpen(false);
    }

    const handleExamTypeOpen = () => {
        setExamModalOpen(true);
    }

    const handleExamTypeClose = () => {
        setExamModalOpen(false);
    };

    const handleButtonClick = (examType) => {
        navigate(`/glossaries/${id}/quiz/${examType}`);
    }

    return (<>
        <div>
            {deleteModalOpen && (<div className="modal">
                <p>정말로 삭제하시겠습니까?</p>
                <button onClick={confirmDelete}>예</button>
                <button onClick={() => setDeleteModalOpen(false)}>취소</button>
            </div>)}
        </div>
        {!deleteModalOpen && (<Grid container>
            <Grid xs={10} md={10} item style={{paddingLeft: 16, paddingRight: 16}}>
                <Link to={`/glossaries/${id}`}>
                    <ListItemText>
                        <InputBase
                            inputProps={{
                                "aria-label": "naked",
                            }}
                            type="text"
                            value={title}
                            multiline
                            fullWidth
                        />
                    </ListItemText>
                </Link>
            </Grid>
            <Grid xs={1} md={1} item>
                <IconButton onClick={(handleExamTypeOpen)}>
                    <PlayArrow/>
                </IconButton>
                <Dialog open={examModalOpen} onClose={handleExamTypeClose}>
                    <DialogContent>
                        <DialogContentText>
                            출제 타입을 골라주세요 :)
                        </DialogContentText>
                        <DialogActions>
                            <Button onClick={() => handleButtonClick('WORD')}>WORD</Button>
                            <Button onClick={() => handleButtonClick('DESCRIPTION')}>DESCRIPTION</Button>
                            <Button onClick={() => handleButtonClick('RANDOM')}>RANDOM</Button>
                            <Button onClick={handleExamTypeClose}>CLOSE</Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </Grid>
            <Grid xs={1} md={1} item>
                <IconButton onClick={deleteEventHandler} aria-label="delete">
                    <Delete/>
                </IconButton>
            </Grid>
        </Grid>)}
    </>);
}

export default Glossary;