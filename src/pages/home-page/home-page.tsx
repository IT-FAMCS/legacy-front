import "../../App.css";
import { DepartmentsWrapper } from "./departments-wrapper";
import { EventsWrapper } from "./events-wrapper";
import { MainInfoWrapper } from "./main-info-wrapper";

export default function HomePage() {
  return (
    <div className="HomePage">
      <DepartmentsWrapper />
      <EventsWrapper />
      <MainInfoWrapper />
    </div>
  );
}
