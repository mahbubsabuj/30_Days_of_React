import React from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const RankList = ({ rankList }) => {
  return (
    <Box sx={{m: 5}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} area-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">CF Handle</StyledTableCell>
            <StyledTableCell align="center">Rank</StyledTableCell>
            <StyledTableCell align="center">New Rating</StyledTableCell>
            <StyledTableCell align="center">Old Rating</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rankList.map((rank) => (
            <StyledTableRow key={rank.handle}>
              <StyledTableCell align="center">
                {rank.handle}
              </StyledTableCell>
              <StyledTableCell align="center">{rank.rank}</StyledTableCell>
              <StyledTableCell align="center">{rank.newRating}</StyledTableCell>
              <StyledTableCell align="center">{rank.oldRating}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};
export default RankList;
