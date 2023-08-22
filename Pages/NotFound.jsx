import React, { useEffect, useState, useCallback } from "react";
import { Button } from "../src/index";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(10);

  const decrementTimer = useCallback(() => {
    setTimer((oldTimer) => oldTimer - 1);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      return;
    }
    const timeoutFunction = setInterval(decrementTimer, 1000);
    return () => clearInterval(timeoutFunction);
  }, [decrementTimer, timer]);

  useEffect(() => {
    const time = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => clearTimeout(time);
  }, []);

  return (
    <div className=" h-full flex flex-col justify-center items-center gap-5">
      <p className="text-black">
        Not Found! You will be redirected to home page after {timer} seconds{" "}
      </p>
      <Button link="/" width={200} bgColor="white" content="Back to Home" />
    </div>
  );
};

export default NotFound;
