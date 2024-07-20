import { fetchGet } from "../api/fetchGet";
import { fetchPost } from "../api/fetchPost";
import { CREATE_EVENT, GET_EVENT } from "../constants/events-url";
import { EventInfo } from "../interfaces/event";

export default function useEvent() {
  async function changeEvent({ data }: { data: EventInfo }) {
    return await fetchPost(CREATE_EVENT, data, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
  }

  async function getEvents(event = "") {
    return await fetchGet(GET_EVENT + event, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
  }

  return { changeEvent, getEvents };
}
