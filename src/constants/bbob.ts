import presetReact from "@bbob/preset-react";

export const ALLOW_TAGS = [
  "i",
  "b",
  "quote",
  "code",
  "br",
  "u",
  "ul",
  "li",
  "ol",
];

export const options = {
  enableEscapeTags: true,
  onlyAllowTags: ALLOW_TAGS,
};
export const plugins = [presetReact()];
