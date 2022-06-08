import React, { useState } from "react";
import Comp from "./Comp";

export default function App() {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const obj_arr = JSON.parse(e.target.result).fields;
      const sorted_data = obj_arr.sort((a, b) => {
        return a.order - b.order;
      });
      setFiles(sorted_data);
    };
  };
  return (
    <>
      <h1>Upload Your Json file Here</h1>

      <input type="file" onChange={handleChange} />
      <br />
      {files.length > 0 && (
        <div id="main_div">
          <form target="_blank" action="https://www.google.com/">
            {files.map((item) => {
              return <Comp key={item.key} data={item} />;
            })}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}
