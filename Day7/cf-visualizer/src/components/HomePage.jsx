import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VerdictChart from "./VerdictChart";
import LanguagesChart from "./LanguagesChart";
import LevelChart from "./LevelChart";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Icon, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TagChart from "./TagChart";
import ContestStats from "./ContestStats";
import SubmissionStats from "./SubmissionStats";
import RatingChart from "./RatingChart";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import fetchUserSubmissions from "../apis/fetchUserSubmissions";
import toast, { Toaster } from "react-hot-toast";
import fetchUserContests from "../apis/fetchUserContests";
import { createLink } from "../utils/dataPrepare";

const createData = (title, value) => {
  return { title, value };
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  const [submissionDetails, setSubmissionDetails] = useState([]);
  const [contestDetails, setContestDetails] = useState([]);
  const [handle, setHandle] = useState("");
  const onTermSubmit = async (term) => {
    setContestDetails([]);
    setSubmissionDetails([]);
    if (term) {
      const toastId = toast.loading("Fetching ...", {
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
      const response = await fetchUserSubmissions(term).catch((e) => false);
      if (!response) {
        toast.error(
          "Could not be fetched! Please check your cf handle and Internet connection!",
          {
            id: toastId,
          }
        );
      } else {
        try {
          if (
            response.data.result.length === 0 &&
            response.data.result.length === 0
          ) {
            toast.error("User doesn't have enough data!", {
              id: toastId,
            });
          } else {
            toast.success("Finished!", {
              id: toastId,
            });
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
            const contestResults = await fetchUserContests(term);
            if (contestResults.length !== 0) {
              let bestRank = Number.MAX_SAFE_INTEGER,
                worstRank = Number.MIN_SAFE_INTEGER,
                maxDelta = Number.MIN_SAFE_INTEGER,
                minDelta = Number.MAX_SAFE_INTEGER,
                bestRankContestId = null,
                worstRankContestId = null,
                maxDeltaContestId = null,
                minDeltaContestId = null,
                rating = null;
              contestResults.map((contest) => {
                if (bestRank >= contest.rank) {
                  bestRank = contest.rank;
                  bestRankContestId = contest.contestId;
                }
                if (contest.rank > worstRank) {
                  worstRank = contest.rank;
                  worstRankContestId = contest.contestId;
                }
                if (maxDelta < contest.delta) {
                  maxDelta = contest.delta;
                  maxDeltaContestId = contest.contestId;
                }
                if (contest.delta < minDelta) {
                  minDelta = contest.delta;
                  minDeltaContestId = contest.contestId;
                }
                rating = contest.newRating;
                return 0;
              });
              setContestDetails([
                createData("Number of contests (rated)", contestResults.length),
                createData(
                  "Best rank",
                  createLink(
                    `https://codeforces.com/contest/${bestRankContestId}`,
                    bestRank,
                    bestRankContestId
                  )
                ),
                createData(
                  "Worst rank",
                  createLink(
                    `https://codeforces.com/contest/${worstRankContestId}`,
                    worstRank,
                    worstRankContestId
                  )
                ),
                createData(
                  "Max up",
                  createLink(
                    `https://codeforces.com/contest/${maxDeltaContestId}`,
                    maxDelta,
                    maxDeltaContestId
                  )
                ),
                createData(
                  "Max down",
                  createLink(
                    `https://codeforces.com/contest/${minDeltaContestId}`,
                    minDelta,
                    minDeltaContestId
                  )
                ),
                createData("Current rating", rating),
              ]);
            } else {
              toast.error("User doesn't have enough data!", {
                id: toastId,
              });
              setContestDetails([
                createData("Number of contests (rated)", "N/A"),
                createData("Best rank", "N/A"),
                createData("Worst rank", "N/A"),
                createData("Max up", "N/A"),
                createData("Max down", "N/A"),
                createData("Current rating", "N/A"),
              ]);
            }
          }
        } catch (error) {
          toast.error("CF server is down right now! Please try again later. ", {
            id: toastId,
          });
        }
      }
    } else {
      toast.error("Please enter your cf handle", {
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Toaster />
      <Box height={10}></Box>
      <SearchBar onTermSubmit={onTermSubmit} />
      {submissionDetails.length !== 0 && (
        <React.Fragment>
          <Box height={10} />
          {contestDetails.length !== 0 && (
            <Box sx={{ width: "90%" }}>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 5, sm: 2, md: 2 }}
              >
                <Grid item xs sm md lg xl>
                  <ContestStats
                    handle={handle}
                    contestDetails={contestDetails}
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
          )}
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
                    minHeight: "750px",
                    // maxheight: "750px"
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
                  <RatingChart
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
                  <LevelChart
                    submissionDetails={submissionDetails}
                    handle={handle}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </React.Fragment>
      )}

      <Box height="30px" />
      <Typography fontWeight={"bold"}>
        {"Developed by mahbubsabuj"}
        <a
          style={{ color: "blue", fontWeight: "bold" }}
          href="https://github.com/mahbubsabuj"
        ></a>
      </Typography>
      <Box heigh="30px" />
      <IconButton
        target="_blank"
        color="primary"
        rel="noreferrer"
        href="https://github.com/mahbubsabuj"
      >
        <GitHubIcon />
      </IconButton>
    </Box>
  );
};

export default HomePage;
