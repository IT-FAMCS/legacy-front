import presetReact from "@bbob/preset-react";
import { EventInfo } from "../../interfaces/event";
import BBCode from "@bbob/react";
import { options, plugins } from "../../constants/bbob";

export function EventInfoComponent({ eventInfo }: { eventInfo: EventInfo }) {
  return (
    <div className="page-info-text-wrapper">
      <h3>Описание</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {eventInfo.description}
        </BBCode>
      </p>
      <h3>Структура</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {eventInfo.structure}
        </BBCode>
      </p>
      <h3>Работа</h3>
      <p>
        <BBCode plugins={plugins} options={options}>
          {eventInfo.work}
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
