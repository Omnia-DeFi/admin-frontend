import { useEffect } from "react";
import { Form, Input, InputNumber } from "antd";
import { FormItem } from "~/components";

export const AddUserForm = ({
  issuer,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  publicAddress,
  setPublicAddress,
  setIssuer,
  showModal,
  operation,
}) => {
  return (
    <Form layout="vertical">
      <div className="grid md:grid-cols-2 md:gap-6">
        <Form.Item label="Email">
          <Input placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>

        <Form.Item label="Issuer">
          <Input placeholder="Enter Issuer" value={issuer} onChange={(e) => setIssuer(e.target.value)}/>
        </Form.Item>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
      <Form.Item label="Phone Number">
          <InputNumber style={{width:"100%"}} controls={false} placeholder="Enter phone number" value={phoneNumber} onChange={(value) => setPhoneNumber(value)}/>
        </Form.Item>

        <Form.Item label="Public Address">
        <Input placeholder="Enter Public Address" value={publicAddress} onChange={(e) => setPublicAddress(e.target.value)}/>
        </Form.Item>
        
      </div>
    </Form>
  );
};
