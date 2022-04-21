/*
 * @Author: 六记
 * @Date: 2022-04-18 16:28:18
 * @LastEditTime: 2022-04-18 16:35:20
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\Containers\AddFrame\Sources\AddTagBase\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Input, Form } from "antd";

function AddTagBase() {

    const hasTag = (tag) => {
        // 默认不存在
        let flag = false;
        let tags = [
            { name: "网络代理", disabled: false },
            { name: "猫咪代理", disabled: false },
        ];
        for(let i=0;i<tags.length;i++){
            if(tags[i] == tag){
                flag = true
            }
        }
        return flag
    };

    // useEffect(()=>{},[])
    // getTags();
    // console.log()

    return (
        <Form.Item name="name" label={"标签名称"} rules={[{ required: true }]}>
            <Input placeholder="请输入软件名称" />
        </Form.Item>
    );
}

export default AddTagBase;
