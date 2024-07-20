import { departmentsInfo } from "../../constants/departments-info";
import { MenuCard } from "../../components/menu-card";

export function DepartmentsWrapper() {
  return (
    <>
      <div className="section-name">Гайды по отделам</div>
      <div className="section-name_second">
        Здесь вы можете узнать актуальную информацию про отделы Проектного
        Направления Студенческого Сoвета ФПМИ
      </div>
      <div className="buttons">
        {departmentsInfo.map((department) => {
          return (
            <MenuCard
              key={department.header}
              header={department.header}
              text={department.text}
              link={department.link}
            />
          );
        })}
      </div>
    </>
  );
}
