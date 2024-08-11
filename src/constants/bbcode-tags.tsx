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
  {
    text: "[h4][/h4]",
    tag: "h4",
    description: "заголовок внутри текста (h4)",
  },
  {
    text: "[a href=ссылка target=_blank]текст[/a]",
    tag: "a",
    description:
      "ссылка c отображением как текст, target=_blank пишите чтобы ссылка открывалась в новой вкладке",
  },
  // {НА ЭТАПЕ РАЗРАБОТКИ
  //   text: '[img src="ссылка на картинку"][img]',
  //   tag: "img",
  //   description: "вставка картинки",
  // },НА ЭТАПЕ РАЗРАБОТКИ
  // {НА ЭТАПЕ РАЗРАБОТКИ, ТЕГ КРАШИТ ПРИЛОЖЕНИЕ
  //   text: '[span style="стили"][/span]',
  //   tag: "span",
  //   description:
  //     "обертка для добавления стилей в аттрибуты (размер текста, цвет и т.п.), стили имеют формат стиль:значение;стиль:значение;",
  // },НА ЭТАПЕ РАЗРАБОТКИ, ТЕГ КРАШИТ ПРИЛОЖЕНИЕ
  // {НА ЭТАПЕ РАЗРАБОТКИ, ТЕГ КРАШИТ ПРИЛОЖЕНИЕ
  //   text: "[color][/color]",
  //   tag: "color",
  //   description:
  //     "позволяет изменить цвет текста: [color=hex]text[/color], где hex - цвет в формате HEX",
  // }, НА ЭТАПЕ РАЗРАБОТКИ, ТЕГ КРАШИТ ПРИЛОЖЕНИЕ
];
