import React, { useState } from "react";

const UploadFile = ({ label, url, setUrl, urls, setUrls }) => {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting");
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadFile(reader.result);
    };
    reader.onerror = () => {
      console.log("Error");
    };
  };

  const uploadFile = async (base64EncodedImage) => {
    console.log("base64EncodedImage", base64EncodedImage);
    // try {
    //     await fetch('/api/upload', {
    //         method: 'POST',
    //         body: JSON.stringify({ data: base64EncodedImage }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     setFileInputState('');
    //     setPreviewSource('');
    //     setSuccessMsg('Image uploaded successfully');
    // } catch (err) {
    //     console.error(err);
    //     setErrMsg('Something went wrong!');
    // }
  };

  return (
    <form>
      <label
        className="block mb-2 text-sm font-medium text-gray-900"
        htmlFor="file_input"
      >
        {label}
      </label>
      <input
        onChange={handleFileInputChange}
        value={fileInputState}
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        <button
          className="mb-4 text-gray-700 border-b-2"
          type="button"
          onClick={onSubmit}
        >
          Submit
        </button>
      </p>
    </form>
  );
};

export default UploadFile;
