import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VerdictChart from "./VerdictChart";
import fetchUserSubmissions from "../apis/fetchUserSubmissions";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
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
        <Container
          sx={{
            height: 570,
            width: 600,
            backgroundColor: "whitesmoke",
            alignItems: "center",
          }}
        >
          <VerdictChart submissionDetails={submissionDetails} handle={handle} />
        </Container>
      )}
    </Box>
  );
};

export default HomePage;
