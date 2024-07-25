import { IconButton, Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { BBCODE_TAGS_LIST } from "../constants/bbcode-tags";

function BBCodeInfo() {
  return (
    <>
      <h4>"Информация по bbcode"</h4>
      <ul>
        {BBCODE_TAGS_LIST.map((tagInfo) => {
          return (
            <li key={tagInfo.tag}>
              {tagInfo.text} - {tagInfo.description}
            </li>
          );
        })}

        <li>
          Возможны обновления списка в будущем (свои предложения писать айтишке,
          есть вариант добавить кастомный тег со своими стилями)
        </li>
      </ul>
      Если ввести тег неверно - текст будет выводится с ошибками!!!
    </>
  );
}

export function BBCodeHint() {
  return (
    <Tooltip title={<BBCodeInfo />}>
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
    </Tooltip>
  );
}
