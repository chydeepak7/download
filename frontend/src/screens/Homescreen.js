import React from "react";
import Header from "../components/Header";
import Upload from "../components/Upload";
import ProfileName from "../components/ProfileName";


function Homescreen() {
  return(
  <div>
    <ProfileName />
    <Header />
    <Upload />
  </div>);
}

export default Homescreen;
