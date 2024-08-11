import presetReact from "@bbob/preset-react";
import { EventInfo } from "../../interfaces/event";
import BBCode from "@bbob/react";
import { options, plugins } from "../../constants/bbob";

export function EventInfoComponent({ eventInfo }: { eventInfo: EventInfo }) {
  return (
    <div className="page-info-text-wrapper">
      <h3>Дата проведения</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {eventInfo.dates}
        </BBCode>
      </p>
      <h3>Описание</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {eventInfo.description}
        </BBCode>
      </p>
      <h3>Подготовка</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {eventInfo.preparations}
        </BBCode>
      </p>
      <h3>Общая информация</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {eventInfo.info}
        </BBCode>
      </p>
      <h3>FAQ</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {eventInfo.FAQ}
        </BBCode>
      </p>
    </div>
  );
}
