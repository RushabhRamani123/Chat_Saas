import { Box, Button, Card, CardContent, Container, Link, Stack, TextField, Typography } from "@mui/material"
const Login = () => {
  return (
    <Box>
        <Container maxWidth='sm'>
        <Card>
            <CardContent>
                <Stack spacing={2}>
                <Typography variant="h5">Login</Typography>
                <Typography variant="subtittle1">Enter your Email below to login into account</Typography>
                </Stack>
               <Stack spacing={2}>
               <TextField fullWidth='false' label="email" placeholder="Enter your email"/>
               <TextField fullWidth='false' label="password" placeholder="Enter your password"/>
                <Button fullWidth variant="contained">Login</Button>
                <Button fullWidth variant="outlined">Login with Google</Button>
               </Stack>
                <Stack >
                  <Typography>
                    Don`&apos`t have an account? 
                  </Typography>
                  <Link heref='#'>
                  Singin
                  </Link>
                </Stack>
            </CardContent>
        </Card>
        </Container>
    </Box>
  )
}

export default Login