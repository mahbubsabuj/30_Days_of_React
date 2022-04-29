import React, {useState, useEffect} from "react";
import DataTable from "./DataTable";
import fetchUserSubmissions from "../apis/fetchUserSubmissions";

function createData(title, value) {
  return { title, value};
}

const ContestStats = ({handle}) => {
  const rows = [
    createData("Number of Contests(Rated)", "_"),
    createData("Best rank", "_"),
    createData("Worst Rank", "_"),
    createData("Max Increment", "_"),
    createData("Max Decrement", "_"),
    createData("_", "_"),
  ];
  const [response, setResponse] = useState([]);
  const fetch = async () => {
    const response = await fetchUserSubmissions(handle);
    setResponse(response);
    console.log(response.data.result);
  }
  useEffect(() => {
    fetch();
  }, []);
  return (
    <DataTable rows = {rows} header = {"Contest stats of "} handle={handle}/>
  );
}

export default ContestStats;
