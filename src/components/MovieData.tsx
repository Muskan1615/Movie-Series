import React from "react";
import { useParams } from "react-router-dom";

const MovieData = () => {
  const { link } = useParams();
  return <div>{link}</div>;
};

export default MovieData;
