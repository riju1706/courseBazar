import React, { useState } from "react";
import "./home.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Carousels from "../../components/Carousels/Carousels";
import NavbarComp from "../../components/navbarComp/NavbarComp";
import Address from "../address/Address";
import Order from "../dashboard/Dashboard";
import Courses from "../../components/courser/Courses";

export default function Home() {
  const [displayName, setDisplayName] = useState("");
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setDisplayName(user.displayName);
      const uid = user.uid;
    } else {
    }
  });
  return (
    <>
      <div>
        <Carousels />
        <div>
          <Courses />
        </div>
      </div>
    </>
  );
}
