import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import useDepartment from "../../hooks/useDepartment";
import { useLocation } from "react-router-dom";
import BBCode from "@bbob/react";
import presetReact from "@bbob/preset-react";
import { MainInfoForm } from "./main-info-form";
import { MainInfoComponent } from "./main-info-component";
import useQuestions from "../../hooks/useQuestions";

export default function MainInfoTemplate({
  mainInfoName,
}: {
  mainInfoName: string;
}) {
  const { getQuestions } = useQuestions();
  const plugins = [presetReact()];

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
      <h2>
        <BBCode plugins={plugins}>{mainQuestionInfo.title}</BBCode>
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
