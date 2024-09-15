import { Button } from "@mui/material";
import { departmentsInfo } from "../constants/departments-info";
import { eventsInfo } from "../constants/events-info";
import { creatorsInfo } from "../constants/creators-info";
import tgIcon from "../images/tg.svg";
import gitIcon from "../images/git.svg";
import { CreatorInfo } from "../interfaces/creators";
import "../App.css";
import { useState } from "react";

export const MenuCard = ({
  header,
  text,
  link,
}: {
  header: string;
  text: string;
  link: string;
}) => {
  return (
    <Button
      href={link}
      variant="contained"
      sx={{
        width: 300,
        color: "white",
        height: 150,
        backgroundColor: "rgb(24, 118, 210)",
        margin: 5,
      }}
    >
      <div className="ButtonText">
        <h2> {header} </h2>
        <div> {text} </div>
      </div>
    </Button>
  );
};

export const EventCard = ({
  header,
  link,
}: {
  header: string;
  link: string;
}) => {
  return (
    <Button
      href={link}
      variant="contained"
      sx={{
        width: 300,
        color: "white",
        height: 150,
        backgroundColor: "rgb(24, 118, 210)",
        margin: 5,
      }}
    >
      <div className="ButtonText">
        <h2>{header}</h2>
      </div>
    </Button>
  );
};

export const MainInfoCard = ({
  header,
  link,
}: {
  header: string;
  link: string;
}) => {
  return (
    <Button
      href={link}
      variant="contained"
      sx={{
        width: 300,
        color: "white",
        backgroundColor: "rgb(24, 118, 210)",
        height: 150,
        margin: 5,
      }}
    >
      <div className="ButtonText">
        <h2>{header}</h2>
      </div>
    </Button>
  );
};

export const CreatorCard: React.FC<CreatorInfo> = ({
  title,
  tg,
  git,
  link_tg,
  link_git,
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: 300,
        color: "white",
        backgroundColor: "rgb(24, 118, 210)",
        height: 200,
        margin: 5,
      }}
    >
      <div className="ButtonText">
        <h2>{title}</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={tgIcon}
            alt="Telegram"
            style={{ width: "35px", height: "35px", margin: "5px" }}
          />
          <a
            className="links"
            href={link_tg}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textTransform: "lowercase",
            }}
          >
            <h3>{tg}</h3>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={gitIcon}
            alt="GitHub"
            style={{ width: "40px", height: "40px", margin: "5px" }}
          />
          <a
            className="links"
            href={link_git}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textTransform: "none",
            }}
          >
            {" "}
            <h3> {git}</h3>
          </a>
        </div>
      </div>
    </Button>
  );
};
