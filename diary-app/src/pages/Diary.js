import React from "react";
import { withRouter } from "react-router-dom";
import { getCardData } from "../lib/api";
import Card from "../components/diary/Card";

const Diary = ({ year, month, match }) => {
  const id = match.params.id;
  const [diaryData,setDiaryData] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getCardData();
      data[year] &&
        setDiaryData(data[year][month].find((el) => el.id === parseInt(id)));
        console.log(diaryData);
    })();
  }, [id]);


  return diaryData && <Card data={diaryData} />





};

export default withRouter(Diary);