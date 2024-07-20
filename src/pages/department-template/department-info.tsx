import { DepatmentInfo } from "../../interfaces/department";
import BBCode from "@bbob/react";
import presetReact from "@bbob/preset-react";
import { options, plugins } from "../../constants/bbob";

export function DepartmentInfoComponent({
  departmentInfo,
}: {
  departmentInfo: DepatmentInfo;
}) {
  return (
    <div className="page-info-text-wrapper">
      <h3>Описание</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {departmentInfo.description}
        </BBCode>
      </p>
      <h3>Структура</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {departmentInfo.structure}
        </BBCode>
      </p>
      <h3>Работа</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {departmentInfo.work}
        </BBCode>
      </p>
      <h3>На мероприятиях</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {departmentInfo.in_events}
        </BBCode>
      </p>
      <h3>FAQ</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {departmentInfo.FAQ}
        </BBCode>
      </p>
    </div>
  );
}
