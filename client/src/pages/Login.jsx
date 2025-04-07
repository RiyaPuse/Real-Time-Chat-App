import React from 'react';
import { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
// import { cameraAlt as CameraAltIcon } from '@mui/icons-material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { VisuallyHiddenInput } from '../components/styles/StyleComponent.jsx';
import { useFileHandler, useInputValidation } from '6pp';
import { usernameValidator } from '../utils/validators.jsx';



/*************  ✨ Windsurf Command ⭐  *************/

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const Username = useInputValidation("", usernameValidator);
  const Password = useInputValidation("");

  const avatar=useFileHandler("single");

const handleLogin = (e) => {
  e.preventDefault();
  
};


  const handleSignUp = (e) => {
    e.preventDefault();
    
  };





  return (
    <div style={{background:" linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(106,106,213,1) 35%, rgba(0,212,255,1) 100%)"}}>
    <Container component={"main"} maxWidth="xs" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {
          isLogin ? (
            <>
              <Typography variant='h5'>Login</Typography>
              <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
                <TextField required fullWidth label="Username" value={Username.value} onChange={Username.changeHandler} margin="normal" variant="outlined" />
                <TextField required fullWidth label="Password" type="password" margin="normal" value={Password.value} onChange={Password.changeHandler} variant="outlined" />
                <Button variant="contained" color="primary" fullWidth>login</Button>
                <Typography textAlign={"center"} m={"1rem"}>Don't have an account</Typography>
                <Button sx={{ marginTop: "1rem" }} fullWidth variant='text' color='secondary' onClick={() => toggleLogin(false)}>Sign up Instead</Button>
              </form>
            </>
          )
            : (
              <>
                <Typography variant='h5'>Sign Up</Typography>
                <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignUp }>
                  <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                    <Avatar sx={{ width: "10rem", height: "10rem", objectFit: 
                      "contain" }}  src={avatar.preview}/>

                    {
                      avatar.error && (
                        <Typography margin={"1rem auto"} width={"fit-contrnt"}
                         display={"block"} color="error" variant="caption">
                          {avatar.error}
                        </Typography>
                      )
                    }
                    <IconButton sx={{position: "absolute", bottom: "0", right: "0", color: "white", bgcolor: "rgba(0,0,0,0.5)", ":hover": { bgcolor: "rgba(0,0,0,0.7)",  } }}

                      component="label">
                      <>
                        <CameraAltIcon />
                        <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                      </>
                    </IconButton>
                  </Stack>
                  <TextField required fullWidth label="Name" margin="normal" value={name.value} onChange={name.changeHandler} variant="outlined" />
                  <TextField required fullWidth label="Username" margin="normal" value={Username.value} onChange={Username.changeHandler} variant="outlined" />

                  {Username.error && (
                    <Typography color="error" variant="caption">
                      {Username.error}
                    </Typography>
                  )}

                  <TextField required fullWidth label="Bio" margin="normal" value={bio.value} onChange={bio.changeHandler} variant="outlined" />
                  <TextField required fullWidth label="Password" type="password" margin="normal" value={Password.value} onChange={Password.changeHandler} variant="outlined" />
                  {/* {
                    Password.error &&(
                    <Typography color="error" variant="caption">
                      {Password.error}
                    </Typography>
                    )
                  } */}

                  <Button variant="contained" color="primary" fullWidth>Sign Up</Button>
                  <Typography textAlign={"center"} m={"1rem"}>Already have an account</Typography>
                  <Button sx={{ marginTop: "1rem" }} fullWidth variant='text' color='secondary' onClick={() => toggleLogin(true)}>Login Instead</Button>
                </form>

              </>
            )
        }

      </Paper>
    </Container>
    </div>
  )
}

export default Login;
