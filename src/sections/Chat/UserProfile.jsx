/* eslint-disable react/prop-types */
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Avatar,
  Divider,
  Tooltip,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  CaretRight,
  CopySimple,
  EnvelopeSimple,
  File,
  Image,
  Link,
  Phone,
  Prohibit,
  VideoCamera,
  X,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import { BellSimpleSlash } from "@phosphor-icons/react/dist/ssr";
const UserProfile = ({ onClose }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          overflowY: "scroll",
          width: 320,
          borderLeft: `1px solid ${theme.palette.divider}`,
          display: "flex",
          flexDirection: "column",
          rowGap: 3,
        }}
      >
        <Stack>
          <Stack
            py={1}
            px={2}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6">Profile</Typography>
            <IconButton onClick={onClose}>
              <X />
            </IconButton>
          </Stack>
        </Stack>
        {/* Profile Picture */}
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Avatar sx={{ width: 150, height: 150 }} src={faker.image.avatar()} />
        </Stack>
        {/* Name and the vedio call and Phone call options */}
        <Stack alignItems={"center"} spacing={2}>
          <Typography variant="subtitle1">{faker.person.fullName()}</Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton>
              <Phone />
            </IconButton>
            <IconButton>
              <VideoCamera />
            </IconButton>
          </Stack>
        </Stack>
        <Divider />
        {/* User Contact Information  */}
        <Stack direction={"column"} spacing={3} px={2}>
          <Stack>
            <Typography variant="subtitle1">Contact Information</Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} px={2}>
            <Box
              sx={{
                px: 2,
                py: 2,
                borderRadius: 1,
                bgcolor: (theme) => theme.palette.grey[200],
              }}
            >
              <EnvelopeSimple />
            </Box>
            <Stack spacing={1}>
              <Typography variant="caption">Email Address</Typography>
              <Typography variant="subtitle2">contact@gmail.com</Typography>
            </Stack>
            <Tooltip title="Copy Email">
              <IconButton size="small" style={{ height: "32px" }}>
                <CopySimple />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
        <Divider />
        {/* Shared files and Doccuments */}
        <Stack
          sx={{
            px: 2,
            py: 2,
            "&:hover": {
              bgcolor: (theme) => theme.palette.grey[200],
              cursor: "pointer",
            },
          }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <File />
            <Typography variant="overline" color={"text.secondary"}>
              File & Document
            </Typography>
          </Stack>
          <CaretRight />
        </Stack>
        {/* Share Images */}
        <Stack
          sx={{
            px: 2,
            py: 2,
            "&:hover": {
              bgcolor: (theme) => theme.palette.grey[200],
              cursor: "pointer",
            },
          }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Image />
            <Typography variant="overline" color={"text.secondary"}>
              File & Document
            </Typography>
          </Stack>
          <CaretRight />
        </Stack>
        {/* Share Links */}
        <Stack
          sx={{
            px: 2,
            py: 2,
            "&:hover": {
              bgcolor: (theme) => theme.palette.grey[200],
              cursor: "pointer",
            },
          }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Link />
            <Typography variant="overline" color={"text.secondary"}>
              Media
            </Typography>
          </Stack>
          <CaretRight />
        </Stack>
        <Stack spacing={2} px={2} alignItems={"center"}>
          <Button
            startIcon={<BellSimpleSlash />}
            color="info"
            fullWidth
            variant="outlined"
          >
            Mute Notification
          </Button>
          <Button
            startIcon={<Prohibit />}
            color="error"
            fullWidth
            variant="outlined"
          >
            Block
          </Button>
        </Stack>
      </Box>
    </>
  );
};
export default UserProfile;
