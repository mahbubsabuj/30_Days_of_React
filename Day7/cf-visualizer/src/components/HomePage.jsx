import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VerdictChart from "./VerdictChart";
import LanguagesChart from "./LanguagesChart";
import ApexChart from "./ApexChart";
import ApexBarChart from "./charts/ApexBarChart";
import LevelChart from "./LevelChart";
import fetchUserSubmissions from "../apis/fetchUserSubmissions";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
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
        <React.Fragment>
          <Box height={10}></Box>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Item
                  elevation={24}
                  sx={{
                    backgroundColor: "whitesmoke",
                    overflow: "auto",
                    height: "350px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <VerdictChart
                    submissionDetails={submissionDetails}
                    handle={handle}
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item
                  elevation={24}
                  sx={{
                    backgroundColor: "whitesmoke",
                    overflow: "auto",
                    height: "350px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LanguagesChart
                    submissionDetails={submissionDetails}
                    handle={handle}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>

          <Box height={10}></Box>
          <Box  sx={{m: 5, width:"100%", backgroundColor: "whitesmoke"}}>
            <Item
              elevation={24}
              sx={{
                backgroundColor: "whitesmoke",
                overflow: "auto",
                width: "100%",
                height: "100%",
              }}
            >
              <TagChart submissionDetails={submissionDetails} handle={handle} />
            </Item>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default HomePage;
