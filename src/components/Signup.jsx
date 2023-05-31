import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Styles/Signup.css'


export default function SignUp() {

    const [email, setEmail] = React.useState("");
    const [password , setPassword] = React.useState("")
    const [name , setName] = React.useState("")

    const HandleEmail  = async (e) =>   {  setEmail(e.target.value)}
    const HandlePassword = async (e) =>  {  setPassword(e.target.value)}
    const HandleName = async (e) =>      {  setName(e.target.value)}

    const handleSubmit = async (event) => {
        event.preventDefault();
        if ( email==="" || password==="" || name==="")
        {
            toast.error("Add Complete Information")
            return;
        }

        try
        {
            const Response = await fetch("http://localhost:3001/user/createUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email,password,name})
            })
            const ResponseToJson = await Response.json()
            if(ResponseToJson.Success)
            {
                toast.success("Account Created Successfully")
            }
            else
            {
                toast.error("Error Occured")
            }
        }
        catch(err)
        {
            console.log(err)
        }   



    };

  return (
    <>
    <div className='NavigationBar'> Bugs Bytes </div>
      <Container component="main" maxWidth="xs">
      <div className="SignupForm">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#007500" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoFocus
              onChange={HandleName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={HandleEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={HandlePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor: " #007500"}}
            >
              Create Account
            </Button>
          </Box>
 
        </Box>
        </div>
        <div id="footer">
        <Typography align="center" color="white">
                Copyright ©
                <Link  href="https://mui.com/">
                    Bugs Bytes
                </Link>{' '}
                {new Date().getFullYear()}
                </Typography>
       </div>
      </Container>
      <ToastContainer theme="colored"/>
    </>
  );
}