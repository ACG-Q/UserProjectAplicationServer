/*
 * @Author: 六记
 * @Date: 2022-04-17 15:19:12
 * @LastEditTime: 2022-04-17 15:27:57
 * @LastEditors: your name
 * @Description:
 * @FilePath: \aplicationserver\src\utils\windowSize\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { useState, useEffect } from "react";

const useWindowSize = () => {
    // 第一步：声明能够体现视口大小变化的状态
    const [windowSize, setWindowSize] = useState({
        width:
            document.documentElement.clientWidth || document.body.clientWidth,
        height:
            document.documentElement.clientHeight || document.body.clientHeight,
    });

    // 第二步：通过生命周期 Hook 声明回调的绑定和解绑逻辑
    useEffect(() => {
        const updateSize = () =>
            setWindowSize({
                width:
                    document.documentElement.clientWidth ||
                    document.body.clientWidth,
                height:
                    document.documentElement.clientHeight ||
                    document.body.clientHeight,
            });
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return windowSize;
};

export default useWindowSize;
