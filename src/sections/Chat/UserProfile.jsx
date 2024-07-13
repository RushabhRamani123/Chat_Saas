import { Box, IconButton, Typography , Stack} from "@mui/material";
import { useTheme } from "@emotion/react";
import { X } from "phosphor-react";
const UserProfile = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
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
                      <Typography variant="h6">
                          Profile
                      </Typography>
                      <IconButton>
                          <X />
                      </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default UserProfile;
