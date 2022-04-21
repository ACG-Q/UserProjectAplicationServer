/*
 * @Author: 六记
 * @Date: 2022-04-17 15:57:30
 * @LastEditTime: 2022-04-18 17:42:35
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\Containers\TagListFrame\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React, { useEffect, useState } from "react";
import { Table, Select, Button, Space } from "antd";
import { FileAddOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import "antd/dist/antd.css";
import AddFrame from "../AddFrame";
import { AddTagBase } from "../AddFrame/Sources";

const { Option } = Select;

function TagListFrame(props) {
    const [showAddFrame, setShowAddFrame] = useState(false);
    useEffect(() => {}, []);

    const config = {
        title: "添加新标签",
        baseOption: AddTagBase,
    };

    const dataSource = [
        {
            name: "网络代理",
            number: 20,
        },
    ];

    dataSource.forEach((item, index) => {
        item["key"] = index + 1;
    });

    const columns = [
        {
            title: "序号",
            dataIndex: "key",
            key: "key",
            width: 100,
        },
        {
            title: "分类名称",
            dataIndex: "name",
            key: "name",
            ellipsis: true,
        },
        {
            title: "应用数量",
            dataIndex: "number",
            key: "number",
            width: 200,
            ellipsis: true,
        },
        {
            title: "操作",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <Button>修改名称</Button>
                    <Button danger>删除</Button>
                </Space>
            ),
            fixed: "right",
            width: 200,
        },
    ];

    const handleChange = (value) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };

    return (
        <>
            {showAddFrame ? (
                <AddFrame
                    isModalVisible={showAddFrame}
                    setIsModalVisible={setShowAddFrame}
                    config={config}
                />
            ) : (
                <></>
            )}
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{
                    itemRender: (current, type, originalElement) => {
                        if (type === "prev") {
                            return <a>👆</a>;
                        }
                        if (type === "next") {
                            return <a>👇</a>;
                        }
                        return originalElement;
                    },
                    showSizeChanger: true,
                    pageSizeOptions: [10, 20, 50, 100],
                }}
                // rowKey={record => record.login.uuid}
                // bordered
                title={(currentPageData) => {
                    return (
                        <div>
                            <span style={{ fontSize: 20 }}>分类管理</span>
                            <Button
                                type="primary"
                                icon={<FileAddOutlined />}
                                style={{ float: "right" }}
                                shape="round"
                                onClick={() => {setShowAddFrame(true)}}
                            >
                                添加
                            </Button>
                        </div>
                    );
                }}
                footer={(currentPageData) => {
                    return (
                        <div>
                            <span>操作: </span>
                            <Select
                                labelInValue
                                defaultValue={{ value: "请选择执行的操作" }}
                                style={{ marginRight: 10 }}
                                onChange={handleChange}
                            >
                                <Option value="delete">选中项删除</Option>
                                <Option value="update">选中项更新</Option>
                            </Select>
                            <Button type="primary">执行</Button>
                        </div>
                    );
                }}
                // loading
                scroll={{
                    scrollToFirstRowOnChange: true,
                    y: "calc(100vh - 400px)",
                }}
                rowSelection={{
                    type: "checkbox",
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(
                            `selectedRowKeys: ${selectedRowKeys}`,
                            "selectedRows: ",
                            selectedRows
                        );
                    },
                    getCheckboxProps: (record) => ({
                        disabled: record.name === "Disabled User",
                        // Column configuration not to be checked
                        name: record.name,
                    }),
                }}
            />
        </>
    );
}

export default TagListFrame;
