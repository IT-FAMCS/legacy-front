import { useState } from "react";
import { DepatmentInfo } from "../../interfaces/department";
import useDepartment from "../../hooks/useDepartment";
import { Button, Input } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { BBCodeHint } from "../../components/bbcode-hint";
import { BBCodeButtons } from "../../components/bbcode/bbcode-tags";

export function DepartmentForm({
  departmentInfo,
}: {
  departmentInfo: DepatmentInfo;
}) {
  const { changeDepartment } = useDepartment();

  const [info, setInfo] = useState<DepatmentInfo>(departmentInfo);
  const [newInfo, setNewInfo] = useState<DepatmentInfo>(departmentInfo);
  const [showError, setShowError] = useState<Boolean>(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setInfo({ ...newInfo });
          changeDepartment({ data: newInfo })
            .then((res: DepatmentInfo) => {
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
          backgroundColor: "inherit",
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
