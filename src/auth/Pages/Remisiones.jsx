import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Cantidad",
    dataIndex: "Cantidad",
    key: "Cantidad",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Unidad",
    dataIndex: "Unidad",
    key: "Unidad",
  },
  {
    title: "Concepto",
    dataIndex: "Concepto",
    key: "Concepto",
  },
  {
    title: "Precio unitario",
    dataIndex: "Precio unitario",
    key: "Precio unitario",
  },
  {
    title: "Importe",
    dataIndex: "Importe",
    key: "Importe",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const Remisiones = () => <Table columns={columns} dataSource={data} bordered />;
export default Remisiones;
