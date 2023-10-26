import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillEditor = dynamic(() => import("react-quill"), {
  ssr: false,
});

const modules = {
  clipboard: {
    matchVisual: false,
  },
  toolbar: [
    [{ font: [] }, { size: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "super" }, { script: "sub" }],
    [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["direction", { align: [] }],
    ["link", "image", "video", "formula"],
    ["clean"],
  ],
};

function MyQuillEditor({ onChange, value }) {
  return (
    <>
      <QuillEditor modules={modules} value={value} onChange={onChange} />;
    </>
  );
}

export default MyQuillEditor;
