import { useState } from "react";
import { DepatmentInfo } from "../../interfaces/department";
import useDepartment from "../../hooks/useDepartment";
import { Button, Input } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";

export function DepartmentForm({
  departmentInfo,
}: {
  departmentInfo: DepatmentInfo;
}) {
  const { changeDepartment } = useDepartment();

  const [info, setInfo] = useState<DepatmentInfo>(departmentInfo);
  const [newInfo, setNewInfo] = useState<DepatmentInfo>(departmentInfo);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setInfo({ ...newInfo });
          changeDepartment({ data: newInfo })
            .then(() => {
              window.location.reload();
            })
            .catch((e) => {
              //выводить что что-то не так
            });
        }}
      >
        Сохранить
      </Button>

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
          multiline
          name="title"
          onChange={(e) => {
            setNewInfo({ ...newInfo, title: e.target.value });
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
        />
        <TextField
          label="Структура"
          multiline
          defaultValue={info.structure}
          name="structure"
          onChange={(e) => {
            setNewInfo({ ...newInfo, structure: e.target.value });
          }}
        />
        <TextField
          label="Работа"
          multiline
          defaultValue={info.work}
          name="work"
          onChange={(e) => {
            setNewInfo({ ...newInfo, work: e.target.value });
          }}
        />
        <TextField
          label="На мероприятиях"
          multiline
          defaultValue={info.in_events}
          name="in_events"
          onChange={(e) => {
            setNewInfo({ ...newInfo, in_events: e.target.value });
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
        />
        <TextField label="Полезные ссылки" name="links" />
      </Box>
    </>
  );
}
