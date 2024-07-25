import { useState } from "react";
import useQuestions from "../../hooks/useQuestions";
import { QuestionInfo } from "../../interfaces/question";
import { Box, Button, Input, TextField } from "@mui/material";
import { BBCodeHint } from "../../components/bbcode-hint";
import { BBCodeButtons } from "../../components/bbcode/bbcode-tags";

export function MainInfoForm({
  mainQuestionInfo,
}: {
  mainQuestionInfo: QuestionInfo;
}) {
  const { changeQuestions } = useQuestions();

  const [info, setInfo] = useState<QuestionInfo>(mainQuestionInfo);
  const [newInfo, setNewInfo] = useState<QuestionInfo>(mainQuestionInfo);
  const [showError, setShowError] = useState<Boolean>(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setInfo({ ...newInfo });
          changeQuestions({ data: newInfo })
            .then((res: QuestionInfo) => {
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
          label="Информация"
          defaultValue={info.info}
          name="info"
          multiline
          onChange={(e) => {
            setNewInfo({ ...newInfo, info: e.target.value });
          }}
          onBlur={(e) => {
            setNewInfo({ ...newInfo, info: e.target.value });
          }}
        />
      </Box>
    </>
  );
}
