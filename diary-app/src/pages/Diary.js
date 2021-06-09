import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getCardData } from "../lib/api";
import Card from "../components/diary/Card";

const Diary = ({ year, month, match }) => {
  //const id = match.params.id;
  console.log(match);
  //const [diaryData, setDiaryData] = useState(null);
  //const [rawData, setRawData] = useState(null);

  return <div>diary page</div>





};

export default withRouter(Diary);