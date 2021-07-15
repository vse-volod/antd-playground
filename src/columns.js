import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Space, Popconfirm, Button, message } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    filters: [
      {
        text: "Петр",
        value: "Петр"
      },
      {
        text: "Хуан",
        value: "Хуан"
      },
      {
        text: "Педро",
        value: "Педро"
      },
      {
        text: "Джон",
        value: "Джон"
      }
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"]
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    filters: [
      {
        text: "London",
        value: "London"
      },
      {
        text: "New York",
        value: "New York"
      },
      {
        text: "Sidney",
        value: "Sidney"
      },
      {
        text: "Vladivostok",
        value: "Vladivostok"
      }
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0
  },

  {
    title: "Action",
    key: "action",

    render: () => (
      <Space size="middle">
        <Popconfirm
          placement="topLeft"
          title={"Are you sure to delete this task?"}
          onConfirm={() => {}}
          okText="Yes"
          cancelText="No"
        >
          <Button>DELETE</Button>
        </Popconfirm>
      </Space>
    )
  }
];

export default columns;
