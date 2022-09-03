import { Button, Modal } from "antd";

export const AddUsers = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Add</Button>
      {showModal && (
        <Modal>
          Something here
        </Modal>
      )}
    </div>
  );
};
