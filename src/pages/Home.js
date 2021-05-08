/** @format */

import React from "react";
import CardHorizontal from "../Components/CardHorizontal/CardHorizontal";
import ScrollingTape from "../Components/ScrollingTape/ScrollingTape";
import Trailer from "../Components/trailer/Trailer";

export default function Home() {
  return <div>
    <ScrollingTape />
    <Trailer />
    <ScrollingTape />
    <CardHorizontal/>
  </div>;
}
