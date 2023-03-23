import React from "react";
import { toast } from "react-toastify";
const ToastifyNotification = () => {
  const NotifySuccess = (start: boolean) => {
    if (start) {
      toast("Break is finished!");
    } else {
      toast("Pomodoro finished!");
    }
  };
  const NotifyError = (msg: string) => {
    toast(`${msg}`);
  };
  const NotifyLogin = (msg: string) => {
    toast(`${msg}`);
  };
  return { NotifySuccess, NotifyError, NotifyLogin };
};

export default ToastifyNotification;
