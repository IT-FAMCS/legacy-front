import { useState } from "react";
import { EventInfo } from "../../interfaces/event";
import useEvents from "../../hooks/useEvents";
import { Button, Input } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { BBCodeHint } from "../../components/bbcode-hint";
import { BBCodeButtons } from "../../components/bbcode/bbcode-tags";

export function EventForm({ eventInfo }: { eventInfo: EventInfo }) {
  const [info, setInfo] = useState<EventInfo>(eventInfo);
  const [newInfo, setNewInfo] = useState<EventInfo>(eventInfo);
  const [showError, setShowError] = useState<Boolean>(false);

  const { changeEvent } = useEvents();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setInfo({ ...newInfo });
          changeEvent({ data: newInfo })
            .then((res: EventInfo) => {
              if (res.id) {
                window.location.reload();
              } else {
                setShowError(true);
              }
            })
            .catch((e) => {
              setShowError(true);
            });
        }}
        sx={{ marginX: "1rem" }}
      >
        Сохранить
      </Button>
      <BBCodeHint />
      {showError && (
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 1,
            marginBottom: 1,
            color: "red",
          }}
        >
          <p>
            {" "}
            Ошибка: проверь что все поля не пустые (поле ссылок можно оставить
            пустым)
          </p>
        </Box>
      )}
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 1,
          marginBottom: 1,
          position: "sticky",
          top: 0,
          bgcolor: "background.default",
          zIndex: 1000,
        }}
      >
        <BBCodeButtons />
      </Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 5,
          marginBottom: 5,
          borderRadius: 2,
        }}
      >
        <Input
          placeholder="Заголовок"
          defaultValue={info.title}
          name="title"
          onChange={(e) => {
            setNewInfo({ ...newInfo, title: e.target.value });
          }}
          onBlur={(e) => {
            setNewInfo({ ...newInfo, title: e.target.value });
          }}
        />
        <TextField
          label="Дата проведения"
          defaultValue={info.dates}
          multiline
          name="dates"
          onChange={(e) => {
            setNewInfo({ ...newInfo, dates: e.target.value });
          }}
          onBlur={(e) => {
            setNewInfo({ ...newInfo, dates: e.target.value });
          }}
        />
        <TextField
          label="Описание"
          defaultValue={info.description}
          multiline
          name="description"
          onChange={(e) => {
            setNewInfo({ ...newInfo, description: e.target.value });
          }}
          onBlur={(e) => {
            setNewInfo({ ...newInfo, description: e.target.value });
          }}
        />
        <TextField
          label="Подготовка"
          multiline
          defaultValue={info.preparations}
          name="preparations"
          onChange={(e) => {
            setNewInfo({ ...newInfo, preparations: e.target.value });
          }}
          onBlur={(e) => {
            setNewInfo({ ...newInfo, preparations: e.target.value });
          }}
        />
        <TextField
          label="Общая информация"
          multiline
          defaultValue={info.info}
          name="main-info"
          onChange={(e) => {
            setNewInfo({ ...newInfo, info: e.target.value });
          }}
          onBlur={(e) => {
            setNewInfo({ ...newInfo, info: e.target.value });
          }}
        />
        <TextField
          label="FAQ"
          multiline
          defaultValue={info.FAQ}
          name="FAQ"
          onChange={(e) => {
            setNewInfo({ ...newInfo, FAQ: e.target.value });
          }}
          onBlur={(e) => {
            setNewInfo({ ...newInfo, FAQ: e.target.value });
          }}
        />
        <TextField label="Полезные ссылки" name="links" />
      </Box>
    </>
  );
}
