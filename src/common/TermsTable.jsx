import {Chip, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {Delete} from "@material-ui/icons";
import {API_BASE_URL} from "../app-config";
import {call} from "../service/ApiService";

function TermsTable({deleteTerm, terms}) {

    const handleDeleteButtonClick = (id) => {
        call(`${API_BASE_URL}/terms/${id}`, "DELETE");
        deleteTerm(id);
    }

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Word</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Keywords</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {terms.map((term) => (
                        <TableRow key={term.id}>
                            <TableCell>{term.id}</TableCell>
                            <TableCell>{term.word}</TableCell>
                            <TableCell>{term.description}</TableCell>
                            <TableCell>
                                {term.keywords.map((keyword, index) => (
                                    <Chip key={index} label={keyword}/>
                                ))}
                            </TableCell>
                            <TableCell>
                                <IconButton aria-label="delete">
                                    <Delete onClick={() => handleDeleteButtonClick(term.id)}/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default TermsTable;