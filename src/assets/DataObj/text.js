import { fileIcon, downlodIcon, closeIcon } from "../icons";

export const dataObj = [
  {
    iconFile: fileIcon,
    downloadIcon: downlodIcon,
    fileSize: "0.4Mb",
    closeIcon: closeIcon,
    close: false,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    text: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
  },
  {
    iconFile: fileIcon,
    downloadIcon: downlodIcon,
    fileSize: "0.4Mb",
    closeIcon: closeIcon,
    close: true,
    tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    text: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
  },
  {
    iconFile: fileIcon,
    downloadIcon: downlodIcon,
    fileSize: "0.4Mb",
    closeIcon: closeIcon,
    close: true,
    tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    text: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
  },
];
