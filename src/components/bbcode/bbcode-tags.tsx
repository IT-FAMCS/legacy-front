import { Box, Button } from "@mui/material";
import { BBCODE_TAGS_LIST } from "../../constants/bbcode-tags";
import { tagInsert } from "../../functions/tag-insert";

export function BBCodeButtons() {
  return (
    <Box component="div">
      {BBCODE_TAGS_LIST.map((tagInfo) => {
        return (
          <Button
            variant="text"
            key={tagInfo.tag}
            onMouseDown={() => {
              tagInsert({ tag: tagInfo.tag });
            }}
            sx={{ textTransform: "none" }}
          >
            {tagInfo.text}
          </Button>
        );
      })}
    </Box>
  );
}
