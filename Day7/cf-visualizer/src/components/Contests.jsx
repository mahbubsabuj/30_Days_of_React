import React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { List } from "@mui/material";
import { Paper } from "@mui/material";
const Contests = () => {
  return (
    // <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
    //   <Badge color="secondary" badgeContent={99}>
    //     Hello
    //   </Badge>
    //   <Badge color="secondary" badgeContent={100}>
    //     <Button>Hello</Button>
    //   </Badge>
    //   <Badge color="secondary" badgeContent={1000} max={999}>
    //     Hello3
    //   </Badge>
    // </Stack>
    <Paper style={{ maxHeight: 200, overflow: "auto" }}>
      <List direction="left">A</List>
      <List direction="left">A</List>
      <List direction="left">A</List>
      <List direction="left">A</List>
      <List direction="left">A</List>
    </Paper>
  );
};

export default Contests;
