import { useState } from "react";
import { fetchGet } from "../api/fetchGet";
import { fetchPost } from "../api/fetchPost";
import { CREATE_DEPARTMENT, GET_DEPARTMENT } from "../constants/department-url";
import { DepatmentInfo } from "../interfaces/department";
import { NotificationProps } from "../interfaces/notification";

export default function useDepartment() {
  const [notification, setNotification] = useState<NotificationProps>({
    message: "",
    severity: "info",
    open: false,
    onClose: () => setNotification((prev) => ({ ...prev, open: false })),
  });

  async function changeDepartment({ data }: { data: DepatmentInfo }) {
    return await  fetchPost(CREATE_DEPARTMENT, data, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }, setNotification);
  }

  async function getDepartments(department = "") {
    return await fetchGet(GET_DEPARTMENT + department, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }, setNotification);
  }

  return { changeDepartment, getDepartments };
}
