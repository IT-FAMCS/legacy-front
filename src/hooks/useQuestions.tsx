import { fetchGet } from "../api/fetchGet";
import { fetchPost } from "../api/fetchPost";
import { CREATE_QUESTION, GET_QUESTIONS } from "../constants/questions-url";
import { QuestionInfo } from "../interfaces/question";

export default function useQuestions() {
  async function changeQuestions({ data }: { data: QuestionInfo }) {
    return await fetchPost(CREATE_QUESTION, data, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
  }

  async function getQuestions(event = "") {
    return await fetchGet(GET_QUESTIONS + event, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
  }

  return { changeQuestions, getQuestions };
}
