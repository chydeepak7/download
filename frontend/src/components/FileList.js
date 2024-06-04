import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listFiles } from "../actions/fileActions";

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
  const fileList = useSelector((state) => state.fileList);
  const { error, loading, files } = fileList;

  useEffect(() => {
    dispatch(listFiles());
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row flex">
          {files.map((file) => (
            <div className="col-md-3 col-xl-8" style={style2} key={file._id}>
              <a href="/files" style={style}>
                {file.file_name.slice(7)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FileList;
