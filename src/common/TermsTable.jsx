import {Chip, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

function TermsTable({deleteTerm, terms}) {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Word</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Keywords</TableCell>
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default TermsTable;