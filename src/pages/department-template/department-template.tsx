import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { DepartmentForm } from "./department-form";
import useDepartment from "../../hooks/useDepartment";
import { useLocation } from "react-router-dom";
import { DepartmentInfoComponent } from "./department-info";
import BBCode from "@bbob/react";
import presetReact from "@bbob/preset-react";

export default function DepartmentTemplate({
  departmentName,
}: {
  departmentName: string;
}) {
  const locale = useLocation();
  const { getDepartments } = useDepartment();
  const plugins = [presetReact()];

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [departmentInfo, setDepartmentInfo] = useState({
    id: 0,
    links: [],
    short_title: locale.pathname.split("/")[1],
    title: "",
    description: "",
    structure: "",
    work: "",
    in_events: "",
    FAQ: "",
  });

  useEffect(() => {
    getDepartments(departmentName).then((res) => {
      if (res.detail) {
        setDepartmentInfo({
          id: 0,
          links: [],
          short_title: locale.pathname.split("/")[1],
          title: "",
          description: "",
          structure: "",
          work: "",
          in_events: "",
          FAQ: "",
        });
      } else {
        setDepartmentInfo(res);
      }
    });
  }, []);

  return (
    <div className="page-info-wrapper">
      <h2>
        <BBCode plugins={plugins}>{departmentInfo.title}</BBCode>
      </h2>
      <Button
        onClick={() => {
          setIsFormVisible(!isFormVisible);
        }}
      >
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <DepartmentForm departmentInfo={departmentInfo} />}
      {!isFormVisible && (
        <DepartmentInfoComponent departmentInfo={departmentInfo} />
      )}
    </div>
  );
}
