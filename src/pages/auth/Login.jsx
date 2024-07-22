import { Box, Card, CardContent, Container, TextField, Typography } from "@mui/material"
const Login = () => {
  return (
    <Box>
        <Container>
        <Card>
            <CardContent>
                <Typography>Login</Typography>
                <Typography>Login</Typography>
                <TextField label="email" placeholder="Enter your email"/>
                <TextField label="password" placeholder="Enter your password"/>
            </CardContent>
        </Card>
        </Container>
    </Box>
  )
}

export default Login