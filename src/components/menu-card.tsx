import { Button } from "@mui/material";
import { departmentsInfo } from "../constants/departments-info";
import { eventsInfo } from "../constants/events-info";
import { creatorsInfo } from "../constants/creators-info";
import tgIcon from "../images/tg.svg";
import gitIcon from "../images/git.svg";
import { CreatorInfo } from "../interfaces/creators";
import "../App.css";

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
        <h4>{header}</h4>
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
        <h4>{header}</h4>
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
        <h4>{header}</h4>
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
        height: 200,
        margin: 5,
      }}
    >
      <div className="ButtonText">
        <h4>{title}</h4>
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
            <p>{tg}</p>
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
            <p> {git}</p>
          </a>
        </div>
      </div>
    </Button>
  );
};
