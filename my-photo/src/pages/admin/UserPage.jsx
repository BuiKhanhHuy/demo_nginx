import React from "react";
import { Button, Flex, Table, Typography } from "antd";
import { CustomModal } from "@/components";

const defineColumns = (viewCallback, editCallback, deleteCallback) => {
  return [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Flex wrap gap="small">
          <Button type="link" onClick={() => viewCallback(record)}>
            View
          </Button>
          <Button type="link" onClick={() => editCallback(record)}>
            Edit
          </Button>
          <Button type="link" onClick={() => deleteCallback(record)} danger>
            Delete
          </Button>
        </Flex>
      ),
    },
  ];
};

const UserPage = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [isLoadingModal, setIsLoadingModal] = React.useState(false);
  const [userDetail, setUserDetail] = React.useState(null);

  const [isLoadingTable, setIsLoadingTable] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  const loadUsers = () => {
    setIsLoadingTable(true);

    fetch("http://localhost:3000/api/v1/admin/users/")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      })
      .finally(() => {
        setIsLoadingTable(false);
      });
  };

  const loadUserDetail = (id) => {
    setIsLoadingModal(true);

    fetch(`http://localhost:3000/api/v1/admin/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setUserDetail(json);
      })
      .finally(() => {
        setIsLoadingModal(false);
      });
  };

  React.useEffect(() => {
    loadUsers();
  }, []);
  
  const viewCallback = (record) => {
    setOpenModal(true);
    loadUserDetail(record.id);
  };

  const editCallback = (record) => {
    setOpenModal(true);
    loadUserDetail(record.id);
  };

  const deleteCallback = (record) => {
    alert(record.id);
  };

  return (
    <>
      <Flex>
        <Typography.Title
          style={{
            margin: 0,
            paddingBottom: "1rem",
            flex: 1,
          }}
          level={3}
        >
          Users
        </Typography.Title>
        <Button type="primary">Add User</Button>
      </Flex>

      <Table
        columns={defineColumns(viewCallback, editCallback, deleteCallback)}
        dataSource={users}
        loading={isLoadingTable}
        key={users.length}
        ro
      />

      <CustomModal
        title="User Detail"
        open={openModal}
        setOpen={setOpenModal}
        isLoading={isLoadingModal}
      ></CustomModal>
    </>
  );
};

export default UserPage;
