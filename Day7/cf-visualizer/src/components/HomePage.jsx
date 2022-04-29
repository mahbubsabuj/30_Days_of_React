import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VerdictChart from "./VerdictChart";
import LanguagesChart from "./LanguagesChart";
import LevelChart from "./LevelChart";
import Loader from "../utils/Loader";
import fetchUserSubmissions from "../apis/fetchUserSubmissions";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TagChart from "./TagChart";
import ContestStats from "./ContestStats";
import SubmissionStats from "./SubmissionStats";
import RatingChart from "./RatingChart";

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
    <Box display="flex" flexDirection="column" alignItems="center">
      <SearchBar onTermSubmit={onTermSubmit} />
      {submissionDetails.length !== 0 && (
        <React.Fragment>
          <Box height={10}></Box>
          <Box sx={{ width: "90%" }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 5, sm: 2, md: 2 }}
            >
              <Grid item xs sm md lg xl>
              <ContestStats
                    handle={handle}
                  />
              </Grid>
              <Grid item xs sm md lg xl>
              <SubmissionStats
                    submissionDetails={submissionDetails}
                    handle={handle}
                  />
              </Grid>
            </Grid>
          </Box>
          <Box height={20}></Box>
          <Box sx={{ width: "90%" }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 5, sm: 2, md: 2 }}
            >
              <Grid item xs sm md lg xl>
                <Item
                  elevation={24}
                  sx={{
                    pl: 5,
                    pr: 5,
                    backgroundColor: "whitesmoke",
                    minHeight: "350px",
                    overflow: "auto",
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
              <Grid item xs sm md lg xl>
                <Item
                  elevation={24}
                  sx={{
                    pl: 5,
                    pr: 5,
                    backgroundColor: "whitesmoke",
                    minHeight: "350px",
                    overflow: "auto",
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

          <Box height={20}></Box>
          <Box sx={{ width: "90%" }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 5, sm: 2, md: 2 }}
            >
              <Grid item xs sm md lg xl>
                <Item
                  elevation={24}
                  sx={{
                    backgroundColor: "whitesmoke",
                    overflow: "auto",
                    minHeight:"450px",
                    overflow: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TagChart
                    submissionDetails={submissionDetails}
                    handle={handle}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box height={20}></Box>
          <Box sx={{ width: "90%" }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 5, sm: 2, md: 2 }}
            >
              <Grid item xs sm md lg xl>
                <Item
                  elevation={24}
                  sx={{
                    backgroundColor: "whitesmoke",
                    overflow: "auto",
                    minHeight: "300px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RatingChart submissionDetails={submissionDetails} handle={handle} />
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box height={20}></Box>
          <Box sx={{ width: "90%" }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 5, sm: 2, md: 2 }}
            >
              <Grid item xs sm md lg xl>
                <Item
                  elevation={24}
                  sx={{
                    backgroundColor: "whitesmoke",
                    overflow: "auto",
                    minHeight: "300px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LevelChart submissionDetails={submissionDetails} handle={handle} />
                </Item>
              </Grid>
            </Grid>
          </Box>
          
        </React.Fragment>
      )}
    </Box>
  );
};

export default HomePage;
