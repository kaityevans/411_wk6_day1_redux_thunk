import React from "react";
import CustomTable from "./Table";
import Button from "@mui/material/Button";

const Import = (props) => {
  // fill out this component
  console.log(props);
  // useEffect(() => {
  //   console.log(props.makes)
  // }, [props.makes])
  return (
    <>
      <h3>Count:{props.makes.length}</h3>
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
      <CustomTable makes={props.makes} />
    </>
  );
};

export default Import;
