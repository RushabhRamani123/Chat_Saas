/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Container maxWidth="sm" sx={{ height: 1 }}>
        <Stack
          sx={{ height: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Card>
            <CardContent>
              <Stack spacing={3}>
                <Stack spacing={2}>
                  <Typography variant="h5">Signup</Typography>
                  <Typography variant="subtittle2">
                    Enter your information to create your account
                  </Typography>
                </Stack>
                <Stack spacing={2}>
                  <Stack direction={"row"} spacing={2}>
                    <TextField
                      fullWidth="false"
                      label="Firstname"
                      placeholder="Enter your firstname"
                    />
                    <TextField
                      fullWidth="false"
                      label="Lastname"
                      placeholder="Enter your Lastname"
                    />
                  </Stack>
                  <TextField
                    fullWidth="false"
                    label="email"
                    placeholder="Enter your email"
                  />
                  <TextField
                    fullWidth="false"
                    label="password"
                    placeholder="Enter your password"
                  />
                  <Button fullWidth variant="contained">
                    Login
                  </Button>
                  <Button fullWidth variant="outlined">
                    Login with Google
                  </Button>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography variant="body2">Already an account?</Typography>
                  <Link to="/login" sx={{ cursor: "pointer" }}>
                    Login
                  </Link>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default Signup;
