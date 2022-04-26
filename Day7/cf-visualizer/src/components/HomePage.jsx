import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VerdictChart from "./VerdictChart";
import LanguagesChart from "./LanguagesChart";
import ApexChart from "./ApexChart";
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
  console.log("HELLO");
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
    <ApexChart/>
    // <Box
    //   height="100vh"
    //   display="flex"
    //   flexDirection="column"
    //   alignItems="center"
    // >
    //   <SearchBar onTermSubmit={onTermSubmit} />
    //   {submissionDetails.length !== 0 && (
    //     <React.Fragment>
    //       <Box sx={{ width: "99%" }}>
    //         <Grid
    //           container
    //           rowSpacing={2}
    //           columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    //         >
    //           <Grid item xs={6}>
    //             <Item
    //               elevation={24}
    //               sx={{ backgroundColor: "whitesmoke", overflow: "auto" }}
    //             >
    //               <VerdictChart
    //                 submissionDetails={submissionDetails}
    //                 handle={handle}
    //               />
    //             </Item>
    //           </Grid>
    //           <Grid item xs={6}>
    //             <Item elevation={24} sx={{ backgroundColor: "whitesmoke" }}>
    //               <LanguagesChart
    //                 submissionDetails={submissionDetails}
    //                 handle={handle}
    //               />
    //             </Item>
    //           </Grid>
    //         </Grid>
    //       </Box>

    //       <Box height={10}></Box>
    //       <Container sx={{ p: 2, m: 2 }}>
    //         <Item
    //           elevation={24}
    //           sx={{ backgroundColor: "whitesmoke", overflow: "auto" }}
    //         >
    //           <TagChart submissionDetails={submissionDetails} handle={handle} />
    //         </Item>
    //       </Container>
    //       <LevelChart submissionDetails={submissionDetails} handle={handle} />
    //       <ApexChart />
    //     </React.Fragment>
    //   )}
    // </Box>
  );
};

export default HomePage;
