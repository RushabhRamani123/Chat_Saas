import { ClickAwayListener } from '@mui/base';
import { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { Picker } from 'emoji-mart';
import data from 'emoji-mart/data'
const EmojiPicker = () => {
    const EmojiPicker = ({
        disabled, 
        value, 
        setValue,
        alignRight=false,
        ...other
    })
    const [emojiPickerState, setEmojiPickerState] = useState(false);
    const theme = useTheme(); 
    let emojiPicker; 
    if (emojiPickerState) {
        emojiPicker = <Picker data={data} color={theme.palette.primary.main} title="Pick your emoji..." onSelect={(emoji)=>{value+emoji ?.native}} /> 
    }
    const triggerPicker = (e) => {
        e.preventDefault(); 
        setEmojiPickerState(true); 
    }
    const handleClickAway = () => {
        setEmojiPickerState(false); 
    }
  return (
      <ClickAwayListener onClickAway={handleClickAway}>
          
    </ClickAwayListener> 
  )
}

export default EmojiPicker
