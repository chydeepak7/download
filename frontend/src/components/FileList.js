import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listFiles, listMyFiles } from "../actions/fileActions";

const style = {
  borderStyle: "none",
  textAlign: "left",
  fontSize: "20px",
};
const style2 = {
  borderStyle: "none",
  fontSize: "20px",
  fontFamily: "Albert Sans, sans-serif",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

function FileList() {
  const dispatch = useDispatch();
  const fileListMy = useSelector((state) => state.fileListMy);
  const { loading, error, files } = fileListMy;
 
  // const fileListMy = useSelector(state => state.fileListMy)
  // const {loading:loadingFiles, error:errorFiles, files:filesFiles} = fileListMy

  useEffect(() => {
    console.log("Fetching files...");
    dispatch(listMyFiles());
    console.log("Fetched files...");
  }, [dispatch]);
  
  return (
    <div>
      <div className="container">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <div className="row flex">
            {files?.map((file) => (
              <div className="col-md-3 col-xl-8" style={style2} key={file._id}>
                <a href="/files" style={style}>
                  {file.file_name.slice(7)}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

}

export default FileList;
