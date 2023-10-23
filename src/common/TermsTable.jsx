import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function TermsTable({headers, terms}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
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
              <TableCell align="right">{term.word}</TableCell>
              <TableCell align="right">{term.description}</TableCell>
              <TableCell align="right">{term.keyword1}</TableCell>
              <TableCell align="right">{term.keyword2}</TableCell>
              <TableCell align="right">{term.keyword3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TermsTable;