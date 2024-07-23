import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import BBCode from "@bbob/react";
import { MainInfoForm } from "./main-info-form";
import { MainInfoComponent } from "./main-info-component";
import useQuestions from "../../hooks/useQuestions";
import { options, plugins } from "../../constants/bbob";

export default function MainInfoTemplate({
  mainInfoName,
}: {
  mainInfoName: string;
}) {
  const { getQuestions } = useQuestions();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [mainQuestionInfo, setMainQuestionInfo] = useState({
    id: 0,
    short_title: mainInfoName,
    title: "",
    info: "",
  });

  useEffect(() => {
    getQuestions(mainInfoName).then((res) => {
      if (!res.detail) {
        setMainQuestionInfo(res);
      }
    });
  }, []);

  return (
    <div className="page-info-wrapper">
      <h2 style={{ marginBottom: "1rem" }}>
        <BBCode plugins={plugins} options={options}>
          {mainQuestionInfo.title}
        </BBCode>
      </h2>
      <Button
        onClick={() => {
          setIsFormVisible(!isFormVisible);
        }}
      >
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <MainInfoForm mainQuestionInfo={mainQuestionInfo} />}
      {!isFormVisible && (
        <MainInfoComponent mainQuestionInfo={mainQuestionInfo} />
      )}
    </div>
  );
}
