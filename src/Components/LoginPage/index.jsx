/*
 * @Author: 六记
 * @Date: 2022-04-17 10:28:00
 * @LastEditTime: 2022-04-17 11:02:34
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\Components\LoginPage\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React, { useState, useEffect } from "react";
import { LoginFrame } from "../../Containers";
import style from "./index.module.css";

function LoginPage(props) {
    // const [isOnline, setIsOnline] = useState(null);
    // const [isLogin, SetLoginState] = useState(false);
    useEffect(() => {}, []);

    return (
        <div className={style["loginPage"]}>
            <div className={style["loginPageLeft"]}>
                <div className={
                    style["loginPageTitle"]
                }>
                    登录页面
                </div>
                <LoginFrame />
            </div>
            <div className={
                    style["loginPageBottom"]
                }>
                    Copyright © 2022 应用管理器
                </div>
        </div>
    );
}

export default LoginPage;
