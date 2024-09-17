import { useState } from "react";
import { fetchGet } from "../api/fetchGet";
import { fetchPost } from "../api/fetchPost";
import { CREATE_QUESTION, GET_QUESTIONS } from "../constants/questions-url";
import { QuestionInfo } from "../interfaces/question";
import { NotificationProps } from "../interfaces/notification";

export default function useQuestions() {
  const [notification, setNotification] = useState<NotificationProps>({
    message: "",
    severity: "info",
    open: false,
    onClose: () => setNotification((prev) => ({ ...prev, open: false })),
  });

  async function changeQuestions({ data }: { data: QuestionInfo }) {
    return await fetchPost(CREATE_QUESTION, data, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }, setNotification);
  }

  async function getQuestions(event = "") {
    return await fetchGet(GET_QUESTIONS + event, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }, setNotification);
  }

  return { changeQuestions, getQuestions };
}
