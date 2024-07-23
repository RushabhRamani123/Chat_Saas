/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Card, CardContent, Container, Link, Stack, TextField, Typography } from "@mui/material"
const Login = () => {
  return (
    <Box sx={{height:'100vh'}}>
        <Container maxWidth='sm' sx={{height:1}}>
        <Stack sx={{height:1,alignItems:'center',justifyContent:'center'}}>
        <Card>
            <CardContent>
               <Stack spacing={3}>
               <Stack spacing={2}>
                <Typography variant="h5">Login</Typography>
                <Typography variant="subtittle2">Enter your Email below to login into account</Typography>
                </Stack>
               <Stack spacing={2}>
               <TextField fullWidth='false' label="email" placeholder="Enter your email"/>
               <TextField fullWidth='false' label="password" placeholder="Enter your password"/>
                <Button fullWidth variant="contained">Login</Button>
                <Button fullWidth variant="outlined">Login with Google</Button>
               </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                  <Typography variant="body2">
                    Don't have an account? 
                  </Typography>
                  <Link heref='#'>
                  Singin
                  </Link>
                </Stack>
               </Stack>
            </CardContent>
        </Card>
        </Stack>
        </Container>
    </Box>
  )
}

export default Login