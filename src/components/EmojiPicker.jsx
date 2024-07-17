/* eslint-disable react/prop-types */
import { ClickAwayListener } from "@mui/base";
import { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Box, IconButton } from "@mui/material";
import { Smiley } from "phosphor-react";
const RootStyle = styled(Box)({
  position: "relative",
});
const PickerStyle = styled("div")({
  bottom: 40,
  overflow: "hidden",
  position: "absolute",
});

const EmojiPicker = ({
  // eslint-disable-next-line no-unused-vars
  disabled,
  value,
  // eslint-disable-next-line no-unused-vars
  setValue,
  // eslint-disable-next-line no-unused-vars
  alignRight = false,
  ...other
}) => {
  const [emojiPickerState, setEmojiPickerState] = useState(false);
  const theme = useTheme();
  let emojiPicker;
  if (emojiPickerState) {
    // eslint-disable-next-line no-unused-vars
    emojiPicker = (
      <Picker
        data={data}
        color={theme.palette.primary.main}
        title="Pick your emoji..."
        onSelect={(emoji) => {
          setValue(value + emoji?.native)
        }}

      />
    );
  }
  const triggerPicker = (e) => {
    e.preventDefault();
    setEmojiPickerState(true);
  };
  const handleClickAway = () => {
    setEmojiPickerState(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <RootStyle {...other}>
        <PickerStyle
          sx={{
            ...(alignRight && {
              right: "-2",
              left: "auto !important",
            }),
          }}
        >
          {emojiPicker}
        </PickerStyle>
        <IconButton disabled={disabled} size="small" onClick={triggerPicker}>
          <Smiley />
        </IconButton>
      </RootStyle>
    </ClickAwayListener>
  );
};

export default EmojiPicker;
