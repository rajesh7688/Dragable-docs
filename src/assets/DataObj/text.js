import { fileIcon, downlodIcon, closeIcon, eye } from "../icons";

export const dataObj = [
  {
    id: 1,
    iconFile: fileIcon,
    downloadIcon: downlodIcon,
    fileSize: "0.4Mb",
    closeIcon: closeIcon,
    eye: eye,
    close: false,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    text: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in React.",
  },
  {
    id: 2,
    iconFile: fileIcon,
    downloadIcon: downlodIcon,
    fileSize: "0.4Mb",
    closeIcon: closeIcon,
    eye: eye,
    close: true,
    tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    text: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in React.",
  },
  {
    id: 3,
    iconFile: fileIcon,
    downloadIcon: downlodIcon,
    fileSize: "0.4Mb",
    closeIcon: closeIcon,
    eye: eye,
    close: true,
    tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    text: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in React.",
  },
];
