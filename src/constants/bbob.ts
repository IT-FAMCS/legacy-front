import presetReact from "@bbob/preset-react";
import { BBCODE_TAGS_LIST } from "./bbcode-tags";

export const options = {
  enableEscapeTags: true,
  onlyAllowTags: BBCODE_TAGS_LIST.map((tagInfo) => {
    return tagInfo.tag;
  }),
};
export const plugins = [presetReact()];
