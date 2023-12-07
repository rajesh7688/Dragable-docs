import React, { useRef } from "react";
import Card from "./Card";

import { fileIcon, downlodIcon } from "../../assets/icons/index";
import { dataObj } from "../../assets/DataObj/text";
import { customCss } from "../../assets/DataObj/css";

const Foreground = () => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="h-screen top-0 left-0 fixed z-[3] w-full flex flex-wrap gap-5 p-6"
    >
      {dataObj &&
        dataObj.map((item, i) => (
          <Card
            key={i}
            className={customCss[0].card}
            data={item}
            refrence={ref}
          />
        ))}
    </div>
  );
};

export default Foreground;
