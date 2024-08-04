import { Button } from "@mui/material";
import { departmentsInfo } from "../constants/departments-info";
import { eventsInfo } from "../constants/events-info";
import { creatorsInfo } from "../constants/creators-info";
import tgIcon from "/Users/anna-maria/Documents/GitHub/legacy-front/src/images/tg.svg";
import gitIcon from "/Users/anna-maria/Documents/GitHub/legacy-front/src/images/git.svg";

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
        margin: 5,
      }}
    >
      <div className="ButtonText">
        <h2>{header}</h2>
        <div>{text}</div>
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

export const CreatorCard = ({
  title,
  tg,
  git,
  link_tg,
  link_git,
}: {
  title: string;
  tg: string;
  git: string;
  link_tg: string;
  link_git: string;
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: 300,
        color: "white",
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
            href={link_tg}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              textTransform: "lowercase",
            }}
          >
            {" "}
            <h2>{tg}</h2>
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
            href={link_git}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              textTransform: "none",
            }}
          >
            {" "}
            <h2> {git}</h2>
          </a>
        </div>
      </div>
    </Button>
  );
};
