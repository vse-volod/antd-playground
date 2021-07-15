import React from "react";
import { Table } from "antd";
import state from "./state";
import columns from "./columns";

const UserTable = () => <Table columns={columns} dataSource={state} />;

export default UserTable;
