import React from "react";
import { useDropzone } from "react-dropzone";
const ReactDropzone5 = () => {
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #cccccc",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input {...getInputProps()} />
      <p>Drag & drop some files here, or click to select files</p>
    </div>
  );
};

export default ReactDropzone5;
