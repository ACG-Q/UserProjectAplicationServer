/*
 * @Author: 六记
 * @Date: 2022-04-17 10:13:56
 * @LastEditTime: 2022-04-17 11:49:20
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\containers\LoginFrame\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import cookie from 'react-cookies'
import { Form, Input, Button, Checkbox, notification } from "antd";
import {
    UserOutlined,
    LockOutlined,
    SmileOutlined,
    WarningOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";
import "antd/dist/antd.css";

// 允许携带cookie
axios.defaults.withCredentials = true;

function LoginFrame(props) {
    // const [userName, SetUserName] = useState("");
    // const [passWord, SetPassWord] = useState("");
    useEffect(() => {
        // Cookie校验
        // res = await axios({
        //     url: '/login?type=cookie',                    
        //     method: 'post',
        //     data: data,
        // });
        // 模拟res
        let res = {
            code: 1
        }
        if(res.code === 1){
            // 成功
            console.log("登录成功")
        }else if(res.code === 0){
            // 失败
            console.log("登录失败")
        }
    }, []);

    const onFinish = (data) => {
        console.log("登录校验成功:", data);
        // 登录接口
        // res = await axios({
        //     url: '/login',                    
        //     method: 'post',
        //     data: data
        // });
        // 模拟res
        let res = {
            code: 1,
            cookie: "123456",
            msg: "欢迎归来, 舰长"
        }
        if(res.code === 1){
            cookie.save("liuji_info", res.cookie, {path: "/"})
        }else if(res.code === 0){
            console.log("登录结果: ", res.msg)
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("登录校验失败:", errorInfo);
        notification.open({
            message: "💩💩💩💩",
            description: `你这个小可爱, 请看提示`,
            icon: <WarningOutlined style={{ color: "#ff4d4f" }} />,
        });
    };

    const forgetPassword = () => {
        notification.open({
            message: "忘记密码怎么办?",
            description:
                "凉拌超级蛋, 我*小可爱*就没有做忘记密码的相关功能. ps: 密码为2fa",
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
            placement: "topLeft",
        });
    };

    return (
        <div id="login" className={styles["loginBaseStyle"]}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "请输入你的用户名!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="请输入你的用户名"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "请输入你的密码!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="请输入你的密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" onClick={forgetPassword}>
                        忘记密码
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginFrame;
