import { useState } from "react";
import { DepatmentInfo } from "../../interfaces/department";
import useDepartment from "../../hooks/useDepartment";
import { Button, Input, Box, TextField } from "@mui/material";
import { BBCodeHint } from "../../components/bbcode-hint";
import { BBCodeButtons } from "../../components/bbcode/bbcode-tags";
import useFormGuard from "../../hooks/useFormGuard";

export function DepartmentForm({
  departmentInfo,
}: {
  departmentInfo: DepatmentInfo;
}) {
  const { changeDepartment } = useDepartment();

  const [info, setInfo] = useState<DepatmentInfo>(departmentInfo);
  const [newInfo, setNewInfo] = useState<DepatmentInfo>(departmentInfo);
  const [showError, setShowError] = useState<Boolean>(false);
  const [isFormDirty, setIsFormDirty] = useFormGuard();

  const handleChange = (name: keyof DepatmentInfo) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          changeDepartment({ data: newInfo })
            .then((res: DepatmentInfo) => {
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
          backgroundColor: "inherit",
        }}
      >
        <Input
          placeholder="Заголовок"
          defaultValue={info.title}
          multiline
          name="title"
          onChange={handleChange('title')}
          onBlur={handleChange('title')}
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
          label="Структура"
          multiline
          defaultValue={info.structure}
          name="structure"
          onChange={handleChange('structure')}
          onBlur={handleChange('structure')}
        />
        <TextField
          label="Работа"
          multiline
          defaultValue={info.work}
          name="work"
          onChange={handleChange('work')}
          onBlur={handleChange('work')}
        />
        <TextField
          label="На мероприятиях"
          multiline
          defaultValue={info.in_events}
          name="in_events"
          onChange={handleChange('in_events')}
          onBlur={handleChange('in_events')}
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
