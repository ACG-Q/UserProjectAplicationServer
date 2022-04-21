/*
 * @Author: 六记
 * @Date: 2022-04-17 09:47:33
 * @LastEditTime: 2022-04-17 14:56:47
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \aplicationserver\src\App.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
// import './App.css';
import { LoginPage, AdminPage } from './Components';
import {ConfigProvider } from 'antd'; // 引入ConfigProvider全局化配置
import zhCN from 'antd/es/locale/zh_CN';  // 引入中文包

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <AdminPage />
      </ConfigProvider>
    </div>
  );
}

export default App;
