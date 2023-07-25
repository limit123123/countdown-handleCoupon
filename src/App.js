import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [countdown, setCountdown] = useState(10); //倒计时
  const [isCouponAvaliable, setIsCouponAvaliable] = useState(false);

  useEffect(() => {
    //定义一个定时器
    const timer = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    //如果倒计时结束，清除定时器并更新
    if (countdown === 0) {
      clearInterval(timer);
      setIsCouponAvaliable(true);
    }

    //组件卸载清除定时器
    return () => clearInterval(timer);
  }, [countdown]); //当countdown状态发生改变 重新执行useEffect

  const handleCoupon = () => {
    setIsCouponAvaliable(false);
  };

  return (
    <div className="App">
      {isCouponAvaliable ? (
        <button onClick={handleCoupon}>抢劵</button>
      ) : (
        <p>倒计时:{countdown}s</p>
      )}
    </div>
  );
}
