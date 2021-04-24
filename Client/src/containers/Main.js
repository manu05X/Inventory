import { Pagination } from "@material-ui/lab";
import axios from "axios";
import React from "react";
import List from "./List";

const DEFAULT_PAGE_NUMBER = 1;

function Main() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = React.useState(0);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/coursePages")
      .then((res) => {
        setTotalNumberOfPages(res.data.totalpages);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/course?pageNo=" + currentPage)
      .then((res) => {
        setItems(res.data);
      });
  }, [currentPage]);

  return (
    <div className="Paper">
      <div className="BottomLeftDesign" />

      <List items={items} />

      <Pagination
        className="Pagination"
        count={totalNumberOfPages}
        defaultPage={DEFAULT_PAGE_NUMBER}
        onChange={(object, number) => setCurrentPage(number)}
      />
    </div>
  );
}

export default Main;
