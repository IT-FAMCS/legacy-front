import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import BBCode from "@bbob/react";
import { MainInfoForm } from "./main-info-form";
import { MainInfoComponent } from "./main-info-component";
import useQuestions from "../../hooks/useQuestions";
import { options, plugins } from "../../constants/bbob";
import { IsPhone } from "../../functions/check-is-phone";
import Loader from "../../components/loader";

export default function MainInfoTemplate({
  mainInfoName,
}: {
  mainInfoName: string;
}) {
  const { getQuestions, loading, notification } = useQuestions();

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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="page-info-wrapper">
      <h2 style={{ marginBottom: "1rem" }}>
        <BBCode plugins={plugins} options={options}>
          {mainQuestionInfo.title}
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
      {isFormVisible && <MainInfoForm mainQuestionInfo={mainQuestionInfo} />}
      {!isFormVisible && (
        <MainInfoComponent mainQuestionInfo={mainQuestionInfo} />
      )}
    </div>
  );
}
