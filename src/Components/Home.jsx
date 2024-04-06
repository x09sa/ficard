import React, { useEffect } from "react";
import imageEid from "../assets/eid.png";
import backgroundMainImage from "../assets/dfdfdf.png";
import imageEid2 from "../assets/eid (1).png";
import imageEid3 from "../assets/eid (2).png";
import imageEid4 from "../assets/eid (3).png";
import html2canvas from "html2canvas";
import BackCountainer from "./BackCountainer";

const ImageContainer = ({ name, message, background, setBackground }) => {
  return (
    <div class="text-center flex-1">
      <div id="image-container">
        <p class="">{name}</p>
      </div>
    </div>
  );
};

const FormContainer = ({
  handleNameChange,
  name,
  handleMessageChange,
  message,
  handleGenerateImage,
}) => {
  return (
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 flex-1 mx-4">
      <input
        type="text"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder-right mt-4 p-5"
        placeholder="ادخل اسمك"
        onChange={handleNameChange}
        value={name}
      />

      <button
        class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring mt-4"
        type="button"
        onClick={handleGenerateImage}
      >
        تنزيل الصورة <i class="ml-2 text-sm fas fa-download"></i>
      </button>
    </div>
  );
};

function Home({ handlePartyModeClick }) {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [background, setBackground] = React.useState("bg-gradient-135");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleGenerateImage = () => {
    const element = document.getElementById("image-container");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = `image_${Date.now()}.png`; // This will generate a unique name for each image
      link.href = canvas.toDataURL("image/png");
      link.click();
    });

    handlePartyModeClick();
  };

  return (
    <div class="home-container">
      {" "}
      <ImageContainer
        background={background}
        name={name}
        message={message}
        setBackground={setBackground}
      />
      <FormContainer
        handleNameChange={handleNameChange}
        handleMessageChange={handleMessageChange}
        name={name}
        message={message}
        handleGenerateImage={handleGenerateImage}
      />
    </div>
  );
}

export default Home;
