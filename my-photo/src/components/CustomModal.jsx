import { Modal } from "antd";
import React from "react";

const CustomModal = (props) => {
  const { open, setOpen, isLoading, title, children } = props;

  return (
    <Modal
      title={<p>{title}</p>}
      loading={isLoading}
      open={open}
      onCancel={() => setOpen(false)}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
