import { IconButton, Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function BBCodeInfo() {
  return (
    <>
      <h4>"Информация по bbcode"</h4>
      <ul>
        <li>[b]text[/b] - жирный текст</li>
        <li>[i]text[/i] - наклонный текст</li>
        <li>[br] - переход на следующую строку</li>
        <li>[u]text[/u] - подчеркнутый текст</li>
        <li>[quote]text[/quote] - цитата</li>
        <li>[ul][/ul] - список с маркерами</li>
        <li>[ol][/ol] - нумерованный список</li>
        <li>[li]text[/li] - элемент списка</li>
        <li>[code]код[/code] - код</li>
        <li>Ждем обновлений</li>
      </ul>
      Если ввести тег неверно - текст будет выводится с ошибками.
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
