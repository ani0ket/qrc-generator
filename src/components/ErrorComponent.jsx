import React from "react";
import Fade from "react-reveal/Fade";

export default function ErrorComponent(props) {
  return (
    <Fade left>
      <div className="absolute left-2 bottom-40 w-52 h-20 bg-white text-black font-semibold p-5 z-40 rounded-[0px_5px_5px_5px] drop-shadow-md border-2 ">
        <p>{props.msg}</p>
      </div>
    </Fade>
  );
}
