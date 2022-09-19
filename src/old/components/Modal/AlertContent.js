/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Form, Input } from "antd";

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
        <Form.Item label="Alert Title">
          <Input
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Alert Type">
          <Input
            placeholder="Enter Alert Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </Form.Item>
      </div>
      <Form.Item label="Alert Content">
        <Input
          placeholder="Enter Alert Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Item>
    </div>
  );
};
