import {Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {useEffect, useState} from "react";
import {call} from "../service/ApiService";
import {API_BASE_URL} from "../app-config";

function TermsTable({deleteTerm, headers, terms}) {

    const [disabled, setDisabled] = useState(true);
    const [selectedIds, setSelectedIds] = useState([]);

    const handleCheckboxClick = (id) => {
        setSelectedIds((prevSelectedIds) => {
            const isNewSelected = !prevSelectedIds.includes(id);

            if (isNewSelected) {
                return [...prevSelectedIds, id];
            } else {
                return prevSelectedIds.filter((selectedId) => selectedId !== id);
            }
        });
    };

    const handleDeleteButtonClick = () => {
        call(`${API_BASE_URL}/terms/${selectedIds.toString()}`, "DELETE");
        selectedIds.forEach(value => deleteTerm(value));
    }

    useEffect(() => {
        if (selectedIds.length === 0) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [selectedIds]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell key={"checkboxArea"} align="center">
                            <IconButton onClick={handleDeleteButtonClick} aria-label="delete" disabled={disabled}>
                                <Delete/>
                            </IconButton>
                        </TableCell>
                        {headers.map(header =>
                            <TableCell key={headers.indexOf(header)} align="right">{header}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {terms.map((term) => (
                        <TableRow
                            key={term.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="center" size="small">
                                <Checkbox onClick={() => handleCheckboxClick(term.id)}/>
                            </TableCell>
                            <TableCell align="right">{term.word}</TableCell>
                            <TableCell align="right">{term.description}</TableCell>
                            <TableCell align="right">{term.keywords[0]}</TableCell>
                            <TableCell align="right">{term.keywords[1]}</TableCell>
                            <TableCell align="right">{term.keywords[2]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TermsTable;