import { useEffect, useState } from "react";
import { EventForm } from "./event-form";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import useEvent from "../../hooks/useEvents";
import BBCode from "@bbob/react";
import { EventInfoComponent } from "./event-info";
import { options, plugins } from "../../constants/bbob";
import { IsPhone } from "../../functions/check-is-phone";
import Loader from "../../components/loader";

export default function EventTemplate({ eventTitle }: { eventTitle: string }) {
  const locale = useLocation();
  const { getEvents, loading, notification } = useEvent();

  const [eventInfo, setEventInfo] = useState({
    id: 0,
    links: [],
    short_title: locale.pathname.split("/")[1],
    title: "",
    description: "",
    preparations: "",
    info: "",
    dates: "",
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
          preparations: "",
          info: "",
          dates: "",
          FAQ: "",
        });
      } else {
        setEventInfo(res);
      }
    });
  }, []);
  const [isFormVisible, setIsFormVisible] = useState(false);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <div className="page-info-wrapper">
      <h2 style={{ marginBottom: "1rem" }}>
        <BBCode plugins={plugins} options={options}>
          {eventInfo.title}
        </BBCode>
      </h2>
      {!IsPhone() && (
        <Button
          onClick={() => {
            setIsFormVisible(!isFormVisible);
          }}
        >
          {isFormVisible ? "Отменить" : "Редактировать"}
        </Button>
      )}
      {isFormVisible && <EventForm eventInfo={eventInfo} />}
      {!isFormVisible && <EventInfoComponent eventInfo={eventInfo} />}
    </div>
  );
}
