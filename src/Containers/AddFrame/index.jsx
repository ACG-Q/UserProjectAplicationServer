/*
 * @Author: 六记
 * @Date: 2022-04-17 16:17:18
 * @LastEditTime: 2022-04-19 09:26:42
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\Containers\AddFrame\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { Form, Modal } from "antd";
import { useEffect } from "react";

function AddFrame(props) {
    const { isModalVisible, setIsModalVisible, config } = props;
    useEffect(() => {}, []);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [form] = Form.useForm();

    return (
        <Modal
            title={config.title}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form form={form} name="control" layout="vertical">
                <config.baseOption config={config} form={form} />
            </Form>
        </Modal>
    );
}

export default AddFrame;
