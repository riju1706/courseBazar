import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";
import { app } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { firebaseOrdersAction } from "../../redux/cartSlice";
import DashboardCourse from "../../components/dashboardCourse/DashboardCourse";

export default function Dashboard() {
  const [firebaseOrders, setFirebaseOrders] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((i) => {
    return i.user;
  });

  useEffect(() => {
    const dbRef = ref(getDatabase(app));

    get(child(dbRef, `mycourse/${user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setFirebaseOrders(snapshot.val().orders);
          dispatch(firebaseOrdersAction(snapshot.val().orders));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>welcome {user.name},</h1>
        <div className="userDetails">
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="ordersContainer">
        <h1>My course:</h1>
        <DashboardCourse course={firebaseOrders} />
      </div>
    </>
  );
}
