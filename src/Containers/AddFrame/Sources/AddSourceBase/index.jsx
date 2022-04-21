/*
 * @Author: 六记
 * @Date: 2022-04-18 17:47:36
 * @LastEditTime: 2022-04-19 14:15:22
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\Containers\AddFrame\Sources\AddSourceBase\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Input, Form, Button, Divider, Switch } from "antd";
import { useEffect, useState } from "react";
import SourceVersionOption from "./SourceVersionOption";
import SourceDownloadOption from "./SourceDownloadOption";

function AddSourceBase(props) {
    const [enableVersionOption, setVersionOption] = useState();
    const { form } = props;
    const hasSource = (sourceKey) => {
        // 默认不存在
        let flag = false;
        let sources = [
            { key: "Github", name: "Github", disabled: false },
            { key: "Gitee", name: "Gitee", disabled: false },
            { key: "Lanzous", name: "蓝奏云", disabled: false },
        ];
        for (let i = 0; i < sources.length; i++) {
            if (sources[i].key == sourceKey) {
                flag = true;
            }
        }
        return flag;
    };

    const getVersionInFrom = () => {
        let values =  form.getFieldsValue([
            // "requestsHttpHeader",
            "versionRequestsHttp",
            "versionRequestsHttpType",
            "versionRequestsHttpExtractType",
            "versionRequestsHttpExtractValue"
        ]);
        // let values = form.getFieldsValue(true);
        return values
    };

    const getDownloadInFrom = () => {
        let values =  form.getFieldsValue([
            // "requestsHttpHeader",
            "versionRequestsHttp",
            "versionRequestsHttpType",
            "versionRequestsHttpExtractType",
            "versionRequestsHttpExtractValue"
        ]);
        // let values = form.getFieldsValue(true);
        return values
    }

    useEffect(() => {
        form.setFieldsValue({
            isVersion: false,
            versionRequestsHttp: null,
            versionRequestsHttpType: "get",
        });
    }, []);

    return (
        <>
            <Form.Item
                label={"源ID"}
                // rules={[{ required: true }]}
                tooltip="为空, 默认为新的源, 自动随机生成一个uuid"
                htmlFor=""
            >
                <Form.Item name="key" style={{ width: "80%", marginBottom: 2 }}>
                    <Input placeholder="请输入源ID" />
                </Form.Item>
                <Button
                    style={{ position: "absolute", right: 0, top: 0 }}
                    onClick={getVersionInFrom}
                >
                    随机生成
                </Button>
            </Form.Item>
            <Form.Item
                name="name"
                label={"源名称"}
                rules={[{ required: true }]}
            >
                <Input placeholder="请输入源名称" />
            </Form.Item>
            <Divider orientation="left">版本判断配置</Divider>
            <Form.Item
                name="isVersion"
                label={"是否启用版本判断"}
                rules={[{ required: true }]}
            >
                <Switch
                    checkedChildren="开启"
                    unCheckedChildren="关闭"
                    defaultChecked={false}
                    onChange={setVersionOption}
                />
            </Form.Item>
            {enableVersionOption ? (
                <SourceVersionOption getVersionInFrom={getVersionInFrom} />
            ) : (
                <></>
            )}
            <Divider orientation="left">软件下载配置</Divider>
            <SourceDownloadOption getDownloadInFrom={getDownloadInFrom} />
        </>
    );
}

export default AddSourceBase;
