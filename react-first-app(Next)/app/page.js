"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import axios from "axios";
const page = () => {
  const [user, setuser] = useState("roa");
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log("", data);
      console.log("Images", Images);
    } catch (error) {
      console.error("error fetching images");
    }
  };
  return (
    <>
      <Header user={user} />
      <button
        onClick={getImages}
        className="px-5 py-3 bg-green-600 font-bold text-white"
      >
        Get images
      </button>
      <div className="p-10">
        {Images.map((elem, i) => {
          return (
            <img
              key={i}
              src={elem.download_url}
              width={300}
              height={300}
              className="m-10 rounded inline-block"
            />
          );
        })}
      </div>
    </>
  );
};
export default page;
