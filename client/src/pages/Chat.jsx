import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
// icons
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { grayColor } from '../constens/color';
import { InputBox } from '../components/styles/StyleComponent';
import { orange } from '@mui/material/colors';

function Chat() {


  const containerRef=useRef(null)
  return (
    <>
    <Stack ref={containerRef}
    boxSizing={"border-box"}
    padding={"1rem"}
    spacing={"1rem"}
    bgcolor={grayColor}
    height={"90%"}
    sx={{
      overflowX:"hidden",
      overflowY:"auto"}}>

      </Stack>
      <form
      style={{
        height:"10%",

      }}
>
<Stack 
direction={"row"} 
height={"100%"}
padding={"1rem"}
alignItems={"center"}
position={"relative"}
>
  <IconButton sx={{
    position:"absolute",
    left:"1.5rem",
    rotate:"30deg",
  }}>
    <AttachFileIcon/>

  </IconButton>
 <InputBox placeholder='Type message Here.....'/>

  <IconButton type='submit' sx={{
    rotate:"-30deg",
    badckgroundColor:orange,
    color :"black",
    marginLeft:"1rem",
    padding:"0.5rem",
    "&:hover":{
bgcolor:"error.dark"
  }
}}>
    <SendIcon/>
    </IconButton>
</Stack>
</form>

    </>

  )
}

export default AppLayout()(Chat);
