import { Form, Modal, Input } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

export const EditMintAddress = ({
  closeMintAddressModal,
  selectedAssetId,
  selectedMintAddress,
  realTimeUpdate,
}) => {
  const [showModal, setShowModal] = useState();
  const [loading, setLoading] = useState(false);
  const [mintAddress, setMintAddress] = useState(selectedMintAddress);
  const [updateStatus, setUpdateStatus] = useState("UNCOMPLETED");

  const closeModal = () => {
    closeMintAddressModal(false);
  };
  const updateMintAddress = () => {
    setLoading(true);
    try {
      fetch(`/api/asset/updatemintaddress`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          id: selectedAssetId,
          mintAddress: mintAddress,
        }),
      })
        .then((res) => {
          return res;
        })
        .then((data) => {
          setLoading(false);
          setUpdateStatus("COMPLETED");
          realTimeUpdate(mintAddress);
          console.log("user successfully updated", data);
        });
    } catch (error) {
      console.log("delete: ", error);
    }
  };

  return updateStatus == "UNCOMPLETED" ? (
    <>
      <Modal
        title="Update Mint Address"
        okText="Update"
        open
        confirmLoading={loading}
        onOk={updateMintAddress}
        onCancel={closeModal}
      >
        <Form layout="vertical">
          <div className="grid md:grid-cols-2 md:gap-6">
            <Form.Item label="Mint address">
              <Input
                placeholder="Mint Address"
                value={mintAddress}
                onChange={(e) => setMintAddress(e.target.value)}
              />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  ) : (
    <>
      <Modal
        title="Update Mint Address"
        open
        onCancel={closeModal}
        footer={null}
      >
        <div>Successfully updated</div>
      </Modal>
    </>
  );
};
