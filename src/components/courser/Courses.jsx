import React, { useEffect, useState } from "react";
import "./courses.css";
import axios from "axios";
import Cards from "../Cards/Cards";
import { app } from "../../firebase";
import { getDatabase, ref, child, get } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { allCourseAction } from "../../redux/cartSlice";

// const database = getDatabase(app);

export default function Courses() {
  // useState =============================================
  // const [allBook, setAllBook] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const dispatch = useDispatch();

  // getBook ========================================================
  useEffect(() => {
    getBook();
  }, []);
  const getBook = async () => {
    const dbRef = ref(getDatabase(app));

    get(child(dbRef, `/course`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(allCourseAction(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const allCourse = useSelector((i) => i.allCourse);
  const searchValue = useSelector((i) => i.search);

  return (
    <div className="fetchContent">
      <h3>{allCourse.length == 0 && "loading...."}</h3>

      <div className="fetchBook" style={{ minHeight: "50rem" }}>
        {allCourse
          .filter((i) => {
            return searchValue == ""
              ? i
              : i.name.toLowerCase().includes(searchValue.toLowerCase());
          })
          .map((i) => (
            <Cards key={i.id} i={i} />
          ))}
      </div>
    </div>
  );
}
