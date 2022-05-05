import React from "react";
import DataTable from "./DataTable";

const ContestStats = ({ handle, contestDetails }) => {
  return (
    <React.Fragment>
      <DataTable
        rows={contestDetails}
        header={"Contest stats"}
        handle={handle}
      />
    </React.Fragment>
  );
};

export default ContestStats;
