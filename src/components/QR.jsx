import React from "react";
import QRCode from "react-qr-code";
import Fade from "react-reveal/Fade";

export default function QRcode({ url }) {
  return (
    <Fade bottom>
      <div className="w-full flex items-center justify-center overflow-hidden">
        <QRCode
          value={url}
          style={{ width: "70%" }}
          bgColor={"rgb(100 116 139)"}
          fgColor={"rgb(24 24 27)"}
          // className="bg-zinc-900"
        />
      </div>
    </Fade>
  );
}
