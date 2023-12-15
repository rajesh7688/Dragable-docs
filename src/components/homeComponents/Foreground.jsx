import React, { useRef, useState } from "react";
import Card from "./Card";

import { fileIcon, downlodIcon } from "../../assets/icons/index";
import { dataObj } from "../../assets/DataObj/text";
import { customCss } from "../../assets/DataObj/css";
import Button from "../ui/Button";
import { set } from "zod";

const Foreground = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState(dataObj);
  const [cardId, setCardId] = useState();

  const lastid = Math.max(...formData.map((item, i) => parseInt(item.id)));

  const handleAdd = () => {
    const newData = {
      id: lastid + 1,
      iconFile: "fileIcon",
      downloadIcon: "",
      fileSize: "",
      closeIcon: "",
      eye: "",
      close: false,
      tag: { isOpen: true, tagTitle: "", tagColor: "green" },
      text: "",
    };

    setFormData((prevData) => [...prevData, newData]);
  };

  console.log(formData);

  return (
    <div
      ref={ref}
      className="h-screen top-0 left-0 fixed z-[3] w-full flex flex-wrap gap-5 p-6"
    >
      {formData &&
        formData.map((item, i) => (
          <Card
            key={item.id}
            className={customCss[0].card}
            data={item}
            refrence={ref}
          />
        ))}
      <div className="bottom-0 flex items-end">
        <Button text={"Add"} handleAdd={handleAdd} />
      </div>
    </div>
  );
};

export default Foreground;
