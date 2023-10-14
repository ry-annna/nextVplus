"use client";
import { useState, useEffect } from "react";
import MyQuillEditor from "@/utils/quillEditor";
import Parser from "html-react-parser";

const QuillPage = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(value);
  //   setData(value);
  // };
  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <div className="flex items-center h-screen">
        <div className="w-[620px] ">
          {/* <QuillNoSSRWrapper
            modules={modules}
            onChange={setValue}
            theme="snow"
          /> */}

          <MyQuillEditor value={value} onChange={handleChange} />

          {/* <button
            onClick={handleSubmit}
            className="w-full bg-[#f1c50e] py-2 rounded-500"
          >
            SUBMIT
          </button> */}
          {/* <p>ppppppp</p> */}
        </div>
        <div className="w-[620px] ql-editor h-screen">{Parser(value)}</div>
        {/* <br />
        <div className="w-[620px]">{value}</div> */}
      </div>
    </>
  );
};

export default QuillPage;
