/*
 * @Author: 六记
 * @Date: 2022-04-18 15:02:02
 * @LastEditTime: 2022-04-18 16:31:02
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\Containers\AddFrame\Sources\AddAplicationBase\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { useEffect, useState } from "react";
import { Input, Form, Select } from "antd";
const { Option } = Select;
const { TextArea } = Input;

function AddAplicationBase(props) {
    const [sourceValue, setSourceChange] = useState(-1);
    const [tagsValue, setTagsChange] = useState([]);
    const { config } = props;
    let children = [];

    const getTagsToChildren = () => {
        children = [];
        let tags = [{name:"网络代理", disabled: false}, {name:"猫咪代理",disabled: false}];
        for (let i = 0; i < tags.length; i++) {
            let tag = tags[i]
            children.push(
                <Option key={tag.name} value={i} disabled={!!tag.disabled}>
                    {tag.name}
                </Option>
            );
        }
    };

    // useEffect(()=>{},[])
    getTagsToChildren()
    // console.log()

    return (
        <>
            <Form.Item
                name="name"
                label={"软件名称"}
                rules={[{ required: true }]}
            >
                <Input placeholder="请输入软件名称" />
            </Form.Item>
            <Form.Item name="tags" label={"分类"} rules={[{ required: true }]}>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="请输入软件分类，例如：网络代理;猫咪代理"
                    defaultValue={[]}
                    onChange={setTagsChange}
                >
                    {children}
                </Select>
            </Form.Item>
            <Form.Item
                name="introduce"
                label={"软件介绍"}
                rules={[{ required: true }]}
            >
                <TextArea placeholder="请输入软件简介" rows={4} />
            </Form.Item>
            {!!config.sourceType && config.sourceType.length>0?<Form.Item
                name="sourceType"
                label={"更新源"}
                rules={[{ required: true }]}
            >
                <Select
                    placeholder="请选择更新源"
                    onChange={setSourceChange}
                    allowClear
                >
                    {(() => {
                        let array = [];
                        for (let i = 0; i < config.sourceType.length; i++) {
                            let item = config.sourceType[i];
                            array.push(
                                <Option
                                    key={item.value}
                                    value={i}
                                    disabled={!!item.disabled}
                                >
                                    {item.name}
                                </Option>
                            );
                        }
                        return array;
                    })()}
                </Select>
            </Form.Item>:<></>}
            

            {(() => {
                for (let i = 0; i < config.sourceType.length; i++) {
                    if (sourceValue == i) {
                        let item = config.sourceType[i];
                        if (item.option != undefined) {
                            return <item.option />;
                        }
                    }
                }
            })()}
        </>
    );
}

export default AddAplicationBase;
