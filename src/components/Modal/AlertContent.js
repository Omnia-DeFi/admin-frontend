/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FormItem } from "../Form";

export const AlertContent = ({
  title,
  setTitle,
  content,
  setContent,
  type,
  setType,
  showModal,
  operation,
}) => {
  useEffect(() => {
    if (operation === "add") {
      setTitle("");
      setContent("");
      setType("");
    }
  }, [showModal]);
  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <FormItem
          name={"title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label={"Alert Title"}
          type={"text"}
        />
        <FormItem
          name={"type"}
          value={type}
          onChange={(e) => setType(e.target.value)}
          label={"Alert Type"}
          type={"text"}
        />
        
      </div>
      <FormItem
          name={"content"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label={"Alert Content"}
          type={"text"}
        />
    </div>
  );
};
