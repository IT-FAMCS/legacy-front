import { BBCode_Tag } from "../interfaces/bbcode-tag";

export const BBCODE_TAGS_LIST: BBCode_Tag[] = [
  {
    text: "[b][/b]",
    tag: "b",
    description: "жирный шрифт",
  },
  {
    text: "[i][/i]",
    tag: "i",
    description: "наклонный шрифт",
  },
  {
    text: "[quote][/quote]",
    tag: "quote",
    description: "цитата",
  },
  {
    text: "[code][/code]",
    tag: "code",
    description: "код",
  },
  {
    text: "[br]",
    tag: "br",
    description: "перенос строки",
  },
  {
    text: "[u][/u]",
    tag: "u",
    description: "подчеркнутый текст",
  },
  {
    text: "[ul][/ul]",
    tag: "ul",
    description: "маркерованный список",
  },
  {
    text: "[ol][/ol]",
    tag: "ol",
    description: "нумерованный список",
  },
  {
    text: "[li][/li]",
    tag: "li",
    description: "элемент списка",
  },
];
