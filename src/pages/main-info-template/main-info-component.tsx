import { options, plugins } from "../../constants/bbob";
import { QuestionInfo } from "../../interfaces/question";
import BBCode from "@bbob/react";

export function MainInfoComponent({
  mainQuestionInfo,
}: {
  mainQuestionInfo: QuestionInfo;
}) {
  return (
    <p className="page-info-text-wrapper">
      <BBCode options={options} plugins={plugins}>
        {mainQuestionInfo.info}
      </BBCode>
    </p>
  );
}
