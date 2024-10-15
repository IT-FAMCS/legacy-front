import { useState } from "react";
import { EventInfo } from "../../interfaces/event";
import useEvents from "../../hooks/useEvents";
import { Button, Input, Box, TextField } from "@mui/material";
import { BBCodeHint } from "../../components/bbcode-hint";
import { BBCodeButtons } from "../../components/bbcode/bbcode-tags";
import useFormGuard from "../../hooks/useFormGuard";

export function EventForm({ eventInfo }: { eventInfo: EventInfo }) {
  const [info, setInfo] = useState<EventInfo>(eventInfo);
  const [newInfo, setNewInfo] = useState<EventInfo>(eventInfo);
  const [showError, setShowError] = useState<Boolean>(false);
  const [isFormDirty, setIsFormDirty] = useFormGuard();

  const { changeEvent } = useEvents();

  const handleChange = (name: keyof EventInfo) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewInfo({ ...newInfo, [name]: e.target.value });
    setIsFormDirty(true);
  };

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
                setIsFormDirty(false);
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
          onChange={handleChange('title')}
          onBlur={handleChange('title')}
        />
        <TextField
          label="Дата проведения"
          defaultValue={info.dates}
          multiline
          name="dates"
          onChange={handleChange('dates')}
          onBlur={handleChange('dates')}
        />
        <TextField
          label="Описание"
          defaultValue={info.description}
          multiline
          name="description"
          onChange={handleChange('description')}
          onBlur={handleChange('description')}
        />
        <TextField
          label="Подготовка"
          multiline
          defaultValue={info.preparations}
          name="preparations"
          onChange={handleChange('preparations')}
          onBlur={handleChange('preparations')}
        />
        <TextField
          label="Общая информация"
          multiline
          defaultValue={info.info}
          name="main-info"
          onChange={handleChange('info')}
          onBlur={handleChange('info')}
        />
        <TextField
          label="FAQ"
          multiline
          defaultValue={info.FAQ}
          name="FAQ"
          onChange={handleChange('FAQ')}
          onBlur={handleChange('FAQ')}
        />
        <TextField label="Полезные ссылки" name="links" />
      </Box>
    </>
  );
}
