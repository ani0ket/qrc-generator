import React, { useState } from "react";
import QRcode from "./QR";
import ErrorComponent from "./ErrorComponent";
import Fade from "react-reveal/Fade";

export default function Card({
  handleChange,
  handleSubmit,
  url,
  showQr,
  showError,
  toggleError,
}) {
  // errorMsg !== "valid" ? alert(errorMsg) : "";
  // url ? setShowQr(true) : setShowQr(false);

  return (
    <Fade bottom>
      <div className="w-1/4 h-4/5 min-w-[320px] min-h-[500px] max-h-[600px] border-[2px] border-lime-300   drop-shadow-xl rounded-lg text-black flex flex-col items-center bg-slate-500 overflow-hidden justify-evenly max-[320px]:w-full relative">
        <div className="text-xl font-semibold text-slate-200 w-4/5 flex flex-col items-center mt-4 mb-4 max-[320px]:w-full">
          <span className="justify-start w-full m-0 px-2 leading-3">
            {" "}
            Generate{" "}
          </span>
          <span className="text-6xl text-white">QR Code</span>{" "}
          <span className="w-full flex justify-end px-2 leading-4">
            {" "}
            for URL
          </span>
        </div>
        <form
          action=""
          className="flex flex-col items-start justify-start w-full px-10 mb-6"
          onSubmit={handleSubmit}
        >
          {/* <label htmlFor="url " className="text-lg font-semibold">
            Enter Your URL
          </label> */}
          <input
            type="text"
            name="url"
            id="url"
            onChange={handleChange}
            value={url}
            className="border-2 border-slate-700 w-full h-10 rounded-md mb-4 px-2 bg-white outline-none"
            placeholder="Enter the URL"
          />
          <button
            type="submit"
            className="w-full h-10  bg-lime-400 text-slate-700 text-xl font-semibold rounded-sm hover:drop-shadow-[5px_5px_0px_#424e5e] transition-all"
          >
            Submit
          </button>
        </form>
        <div className="w-full h-1/3 flex items-center justify-center flex-1">
          {showQr && <QRcode url={url} />}
        </div>
        {showError && (
          <ErrorComponent
            msg={"Not a valid URL. Try Again!"}
            toggleError={toggleError}
          />
        )}
      </div>
    </Fade>
  );
}
