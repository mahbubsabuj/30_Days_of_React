import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VerdictChart from "./VerdictChart";
import LanguagesChart from "./LanguagesChart";
import fetchUserSubmissions from "../apis/fetchUserSubmissions";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TagChart from "./TagChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  const [submissionDetails, setSubmissionDetails] = useState([]);
  const [handle, setHandle] = useState("");

  const onTermSubmit = async (term) => {
    const response = await fetchUserSubmissions(term);
    console.log(response.data.result);
    const results = response.data.result.map((data) => {
      return {
        contestId: data.problem.contestId,
        index: data.problem.index,
        rating: data.problem.rating,
        tags: data.problem.tags,
        verdict: data.verdict,
        language: data.programmingLanguage,
      };
    });

    setHandle(term);
    setSubmissionDetails(results);
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <SearchBar onTermSubmit={onTermSubmit} />
      {submissionDetails.length !== 0 && (
        <Box sx={{ width: "90%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 2, sm: 3, md: 4 }}
          >
            <Grid item xs={6}>
              <Item sx={{ backgroundColor: "whitesmoke" }}>
                <VerdictChart
                  submissionDetails={submissionDetails}
                  handle={handle}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ backgroundColor: "whitesmoke" }}>
                <LanguagesChart
                  submissionDetails={submissionDetails}
                  handle={handle}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      )}
      <Box height={10}></Box>
      {submissionDetails.length !== 0 && <TagChart submissionDetails={submissionDetails} handle={handle} />}
      
    </Box>
  );
};

export default HomePage;
