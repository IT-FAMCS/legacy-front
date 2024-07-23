import { MainInfoCard } from "../../components/menu-card";
import { mainInfo } from "../../constants/main-info";

export function MainInfoWrapper() {
  return (
    <>
      <div className="section-name">Общая информация</div>
      <div className="buttons">
        {mainInfo.map((mainI) => {
          return (
            <MainInfoCard
              key={mainI.header}
              header={mainI.header}
              link={mainI.link}
            />
          );
        })}
      </div>
    </>
  );
}
