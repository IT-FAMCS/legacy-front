import { useState } from "react";
import { fetchGet } from "../api/fetchGet";
import { fetchPost } from "../api/fetchPost";
import { CREATE_EVENT, GET_EVENT } from "../constants/events-url";
import { EventInfo } from "../interfaces/event";
import { NotificationProps } from "../interfaces/notification";

export default function useEvent() {
  const [notification, setNotification] = useState<NotificationProps>({
    message: "",
    severity: "info",
    open: false,
    onClose: () => setNotification((prev) => ({ ...prev, open: false })),
  });

  async function changeEvent({ data }: { data: EventInfo }) {
    return await fetchPost(CREATE_EVENT, data, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }, setNotification);
  }

  async function getEvents(event = "") {
    return await fetchGet(GET_EVENT + event, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }, setNotification);
  }

  return { changeEvent, getEvents };
}
