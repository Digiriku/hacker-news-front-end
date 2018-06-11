import React from "react";
import ReactLoading from "react-loading";
import LoadingWrapper from "./style.js";

const Loading = () => (
  <LoadingWrapper>
        <ReactLoading type='bars' color="#ff6500" />
  </LoadingWrapper>
);

export default Loading;
