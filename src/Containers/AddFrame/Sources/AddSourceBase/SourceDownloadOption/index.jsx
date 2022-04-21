/*
 * @Author: 六记
 * @Date: 2022-04-19 10:21:15
 * @LastEditTime: 2022-04-19 14:17:04
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\Containers\AddFrame\Sources\AddSourceBase\SourceDownloadOption\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Input, Form, Button, Select } from "antd";
import axios from "axios";
const { Option } = Select;

const __getResForJson = (data, extractValue) => {
    let extractValueList = extractValue.split(".");
    let value = data;
    for (let i = 0; i < extractValueList.length; i++) {
        let jsonPath = extractValueList[i];
        value = value[jsonPath];
    }
    return value;
};
const __getResForRegx = (data, extractValue, extractflags) => {
    extractValue = "x.LSD.1.adsasd";
    new RegExp(extractValue, extractflags);
    // todo
};
const _getResForData = (data, extractType, extractValue, extractflags) => {
    if (extractType == "json") {
        return __getResForJson(data, extractValue);
    } else if (extractType == "regular") {
        return __getResForRegx(data, extractValue, extractflags);
    }
};

function SourceDownloadOption(props) {
    const { getVersionInFrom } = props;

    const checkGetFunction = async () => {
        let {
            // requestsHttpHeader,
            // versionRequestsHttp,
            downloadRequestsHttpType,
            downloadRequestsHttpExtractType,
            downloadRequestsHttpExtractValue,
            downloadRequestsHttpExtractFlags,
        } = getVersionInFrom();

        if (downloadRequestsHttpType === "get") {
            // const data = await axios.get(versionRequestsHttp, {headers:requestsHttpHeader||""})
            const { data, status } = await axios.get(
                "https://blog.csdn.net/qq_36658051/article/details/109221668"
            );
            if (status === 200) {
                return _getResForData(
                    data,
                    downloadRequestsHttpExtractType,
                    downloadRequestsHttpExtractValue,
                    downloadRequestsHttpExtractFlags
                );
            }
        } else if (downloadRequestsHttpType === "post") {
            // const data = await axios.get(versionRequestsHttp, {headers:requestsHttpHeader||""})
            // const data = await axios.post(versionRequestsHttp)
            // console.log("code===", code)
            // console.log("result===", result)
            // console.log("data===", data)
        }
    };

    return (
        <>
            <Form.Item
                name="downloadRequestsHttp"
                label={"下载信息链接"}
                tooltip={"存在下载链接的网站链接"}
            >
                <Input placeholder="请输入下载信息链接" />
            </Form.Item>
            <Form.Item
                name="downloadRequestsHttpType"
                label={"请求方式"}
                tooltip={"以什么请求方式对存在下载链接的网站链接进行访问"}
            >
                <Select defaultValue="get" allowClear>
                    +<Option value="get">GET请求</Option>
                    <Option value="post">POST请求</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="downloadRequestsHttpExtractType"
                label={"提取方法类型"}
                tooltip={"提取的方式: 支持正则、json"}
            >
                <Select
                    defaultValue="请选择提取方法类型"
                    allowClear
                    onSelect={(e) => setExtractType(e === "regular")}
                >
                    <Option value="regular">正则</Option>
                    <Option value="json">JSON</Option>
                </Select>
            </Form.Item>
            {extractType ? (
                <Form.Item
                    name="versionRequestsHttpExtractFlags"
                    label={"正则配置"}
                    tooltip={"获取版本信息的正则配置"}
                >
                    <Select defaultValue="请选择正则配置" allowClear>
                        <Option value="g">
                            全局(
                            <span style={{ color: "red", fontWeight: 500 }}>
                                g
                            </span>
                            lobal)
                        </Option>
                        <Option value="m">
                            多行(
                            <span style={{ color: "red", fontWeight: 500 }}>
                                m
                            </span>
                            ulti line)
                        </Option>
                        <Option value="i">
                            不区分大小写(
                            <span style={{ color: "red", fontWeight: 500 }}>
                                i
                            </span>
                            nsensitive)
                        </Option>
                        <Option value="u">
                            Unicode匹配(
                            <span style={{ color: "red", fontWeight: 500 }}>
                                u
                            </span>
                            nicode)
                        </Option>
                        <Option value="s">
                            单行(
                            <span style={{ color: "red", fontWeight: 500 }}>
                                s
                            </span>
                            ingle line)
                        </Option>
                    </Select>
                </Form.Item>
            ) : (
                <></>
            )}
            <Form.Item label={"提取值"} tooltip={"获取下载链接的提取值"}>
                <Form.Item
                    name="versionRequestsHttpExtractValue"
                    style={{ width: "85%", marginBottom: 2 }}
                >
                    <Input placeholder="请输入版本链接" />
                </Form.Item>
                <Button
                    style={{ position: "absolute", right: 0, top: 0 }}
                    onClick={checkGetFunction}
                >
                    测试
                </Button>
            </Form.Item>
        </>
    );
}

export default SourceDownloadOption;
