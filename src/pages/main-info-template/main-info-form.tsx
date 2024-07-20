import { useState } from "react";
import useQuestions from "../../hooks/useQuestions";
import { QuestionInfo } from "../../interfaces/question";
import { Box, Button, Input, TextField } from "@mui/material";

export function MainInfoForm({
  mainQuestionInfo,
}: {
  mainQuestionInfo: QuestionInfo;
}) {
  const { changeQuestions } = useQuestions();

  const [info, setInfo] = useState<QuestionInfo>(mainQuestionInfo);
  const [newInfo, setNewInfo] = useState<QuestionInfo>(mainQuestionInfo);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setInfo({ ...newInfo });
          changeQuestions({ data: newInfo })
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
          name="title"
          onChange={(e) => {
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
        />
      </Box>
    </>
  );
}
