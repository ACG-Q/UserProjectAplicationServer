/*
 * @Author: 六记
 * @Date: 2022-04-17 16:48:10
 * @LastEditTime: 2022-04-18 15:35:04
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\Containers\AddFrame\Sources\SourceGithub\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Button, Form, Input, Tooltip, notification } from "antd";
import { GithubOutlined } from "@ant-design/icons"
import { useRef, useState } from "react";

const TestProxy = (value) => {
    console.log("测试链接", value);
    notification.open({
        message: "仓库获取成功",
        description: <div>仓库名: clash_for_windows_pkg<br/>拥有者: Fndroid</div>,
        icon: <GithubOutlined />,
        duration: 3
    });
};

function GithubOption(props) {
    const defaultValue =
        "http://hub.fastgit.xyz/#owner#/#repo#/releases/download/#tag#/#name#";
    const [value, SetrValue] = useState(defaultValue);
    const refProxy = useRef();
    return (
        <>
            <Form.Item
                name="githubRepo"
                label={"仓库链接"}
                tooltip={
                    <div>
                        举个例子, 我要填写Clash For Windows
                        <br />
                        那么就可以填写
                        https://github.com/Fndroid/clash_for_windows_pkg
                    </div>
                }
                // style={{minWidth:32}}
                required
            >
                <Input style={{ width: "85%"}} placeholder="请输入仓库链接"/>
                <Button
                    onClick={() => TestProxy(value)}
                    style={{ position: "absolute", marginLeft: 5 }}
                >
                    测试
                </Button>
            </Form.Item>
            <Form.Item name="downProxy" label={"下载代理"}>
                <Tooltip
                    placement={"bottomRight"}
                    title={
                        <div>
                            关键词有:
                            <br />
                            1. 仓库名称 #repo#
                            <br />
                            2. 仓库拥有者 #owner#
                            <br />
                            3. 仓库标签 #tag#
                            <br />
                            4. 文件名称 #name#
                            <br />
                            5. 仓库原下载链接 #downloadUrl#
                        </div>
                    }
                >
                    <Input
                        defaultValue={defaultValue}
                        ref={refProxy}
                        onChange={(e) => {
                            SetrValue(e.target.value);
                        }}
                    />
                </Tooltip>
            </Form.Item>
        </>
    );
}

export default GithubOption;
