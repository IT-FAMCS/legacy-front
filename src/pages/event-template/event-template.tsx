import { useEffect, useState } from "react";
import { EventForm } from "./event-form";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import useEvent from "../../hooks/useEvents";
import presetReact from "@bbob/preset-react";
import BBCode from "@bbob/react";
import { EventInfoComponent } from "./event-info";

export default function EventTemplate({ eventTitle }: { eventTitle: string }) {
  const locale = useLocation();
  const { getEvents } = useEvent();
  const plugins = [presetReact()];

  const [eventInfo, setEventInfo] = useState({
    id: 0,
    links: [],
    short_title: locale.pathname.split("/")[1],
    title: "",
    description: "",
    structure: "",
    work: "",
    FAQ: "",
  });

  useEffect(() => {
    getEvents(eventTitle).then((res) => {
      if (res.detail) {
        setEventInfo({
          id: 0,
          links: [],
          short_title: locale.pathname.split("/")[1],
          title: "",
          description: "",
          structure: "",
          work: "",
          FAQ: "",
        });
      } else {
        setEventInfo(res);
      }
    });
  }, []);
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="page-info-wrapper">
      <h2>
        <BBCode plugins={plugins}>{eventInfo.title}</BBCode>
      </h2>
      <Button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <EventForm eventInfo={eventInfo} />}
      {!isFormVisible && <EventInfoComponent eventInfo={eventInfo} />}
    </div>
  );
}
