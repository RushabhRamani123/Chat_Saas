/* eslint-disable react/prop-types */
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import {
  Calendar,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
  Phone,
  VideoCamera,
  File,
} from "@phosphor-icons/react";
import { PaperPlane } from "phosphor-react";
import { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import UserProfile from "./UserProfile";
import EmojiPicker from "../../components/EmojiPicker";
const ChatHeader = ({ toggleUserProfile }) => {
  const [anchorEl, SetanchorEl] = useState(null);
  const handleClickcal = (event) => {
    SetanchorEl(event.currentTarget);
  };
  const openCal = Boolean(anchorEl);
  const id = openCal ? "3232" : undefined;
  const handleCloseCal = () => {
    SetanchorEl(null);
  };
  const [showSearch, setShowSearch] = useState(false);
  const handleToggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <Stack>
      <Stack
        sx={{ px: 3, py: 1 }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          onClick={toggleUserProfile}
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Avatar src={faker.image.avatar()} alt={faker.person.fullName()} />
          <Typography>{faker.person.fullName()}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={0}>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton onClick={handleToggleSearch}>
            <MagnifyingGlass />
          </IconButton>
        </Stack>
      </Stack>
      {showSearch && (
        <>
          <Divider />
          <Stack
            sx={{ px: 1, py: 0.5 }}
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <IconButton onClick={handleClickcal}>
              <Calendar />
            </IconButton>
            <Popover
              id={id}
              open={openCal}
              anchorEl={anchorEl}
              onClose={handleCloseCal}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              <DateCalendar />
            </Popover>
            <TextField
              fullWidth
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MagnifyingGlass />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton>
              <CaretLeft />
            </IconButton>
            <IconButton>
              <CaretRight />
            </IconButton>
            <Button
              onClick={handleToggleSearch}
              size="small"
              variant="contained"
            >
              Done
            </Button>
          </Stack>
        </>
      )}
    </Stack>
  );
};

const ChatWindow = () => {
  const theme = useTheme();
  const [showUserProfile, setShowUserProfile] = useState(false);
  const handleToggleUserProfile = () => {
    setShowUserProfile((prev) => !prev);
  };
  return (
    <Stack
      direction="row"
      flexrowGrow={1}
      sx={{ height: "100vh", width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          borderRight: `1px solid ${theme.palette.divider}`,
          overflow: "hidden",
        }}
      >
        <ChatHeader toggleUserProfile={handleToggleUserProfile} />
        <Divider />
        {/*Messages*/}
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}></Box>
        {/* Sending message */}
        <Box
          sx={{
            p: 2,
            border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
            boxShadow: theme.shadows[24],
          }}
        >
          <Stack spacing={1}>
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              variant="standard"
              multiline
              // customize this thing at last
              // minRows={4}
              // maxRows={10}
              sx={{
                outline: "none",
                border: "none",
                "& .MuiInputBase-input": {
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  overflow: "hidden",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  "-ms-overflow-style": "none",
                },
              }}
            />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <EmojiPicker />
                <IconButton>
                  <File size={18} />
                </IconButton>
              </Stack>
              <Stack>{/* This empty Stack acts as a spacer */}</Stack>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Button variant="contained" startIcon={<PaperPlane />}>
                  Send
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
      {showUserProfile && <UserProfile onClose={handleToggleUserProfile} />}
    </Stack>
  );
};

export default ChatWindow;
