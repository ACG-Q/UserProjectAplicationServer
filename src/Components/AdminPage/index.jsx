/*
 * @Author: 六记
 * @Date: 2022-04-17 09:57:56
 * @LastEditTime: 2022-04-18 17:41:52
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\Components\AdminPage\index.jsx
 * @可以输入预定的版权声明、个性签名、空行等
 */
import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, message } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    OrderedListOutlined,
    DatabaseOutlined,
    FormOutlined,
    UserOutlined,
    QuestionCircleOutlined,
    DashboardOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import style from "./index.module.css";
import "antd/dist/antd.css";
import { AplicationListFrame, TagListFrame, SourceListFrame } from "../../Containers";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function AdminPage(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [menuId, setMenuId] = useState(0);
    useEffect(() => {}, []);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = (e) => {
        message.info("Click on menu item.");
        console.log("click", e);
    };

    const adminMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                个人信息修改
            </Menu.Item>
            <Menu.Item key="2" icon={<LogoutOutlined />}>
                登出
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className={style["logo"]} />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectable
                    defaultSelectedKeys={["0"]}
                    onSelect={({ key, keyPath, selectedKeys, domEvent }) => setMenuId(key[0])}
                >
                    <Menu.Item key={0} icon={<DashboardOutlined />}>
                        首页
                    </Menu.Item>
                    <Menu.Item key={1} icon={<OrderedListOutlined />}>
                        应用管理
                    </Menu.Item>
                    <Menu.Item key={2} icon={<DatabaseOutlined />}>
                        分类管理
                    </Menu.Item>
                    <Menu.Item key={3} icon={<FormOutlined />}>
                        软件源管理
                    </Menu.Item>
                    <Menu.Item key={4} icon={<QuestionCircleOutlined />}>
                        关于
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className={style["site-layout-background"]}
                    style={{ padding: 0 }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: style["trigger"],
                            onClick: toggle,
                        }
                    )}
                    <div
                        style={{
                            display: "initial",
                            float: "right",
                            marginRight: "20px",
                        }}
                    >
                        <Dropdown.Button
                            overlay={adminMenu}
                            placement="topRight"
                            style={{ flexDirection: "row-reverse" }}
                            icon={<UserOutlined />}
                        >
                            六记
                        </Dropdown.Button>
                    </div>
                </Header>
                <Content
                    className={style["site-layout-background"]}
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {menuId == 1 ? (
                        <AplicationListFrame />
                    ) : menuId == 2 ? (
                        <TagListFrame />
                    ) : menuId == 3 ? (
                        <SourceListFrame />
                    ) : menuId == 4 ? (
                        <>关于</>
                    ) : (
                        <>首页</>
                    )}
                </Content>
            </Layout>
        </Layout>
    );
}

export default AdminPage;
