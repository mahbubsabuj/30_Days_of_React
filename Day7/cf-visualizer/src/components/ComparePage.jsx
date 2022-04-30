import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, IconButton, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Container } from "@mui/material";
import { Icon } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const ComparePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
        },
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ pl: 8, pr: 8 }}
      >
        <Grid item xs={1}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={5}>
          <Item elevation={24}>
            <TextField
              id="filled-search"
              type="search"
              variant="filled"
              placeholder="Handle 1"
              sx={{ color: "black", borderColor: "black" }}
              inputProps={{
                style: { color: "black", backgroundColor: "white" },
              }}
              focused
              value={""}
              onChange={() => {}}
            />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item elevation={24}>
            <TextField
              id="filled-search"
              type="search"
              variant="filled"
              placeholder="Handle 2"
              sx={{ color: "black", borderColor: "black" }}
              inputProps={{
                style: { color: "black", backgroundColor: "white" },
              }}
              focused
              value={""}
              onChange={() => {}}
            />
          </Item>
        </Grid>
      </Grid>
      <Box textAlign="center">
        <Button
          style={{
            borderRadius: 10,
            backgroundColor: "black",
            fontSize: "18px",
          }}
          variant="contained"
          startIcon={<CompareArrowsIcon />}
        >
          Compare
        </Button>
      </Box>
    </Box>
  );
}

export default ComparePage;
