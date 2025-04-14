import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import {Icon} from "@mui/material";
import { Face as FaseIcon, AlternateEmail as UserNameIcon,CalendarMonth as CalendarIcon} from '@mui/icons-material';
import moment from 'moment';

const ProfileScreen = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar sx={{ width: 200, height: 200, objectFit:"contain",marginBottom:"1rem" ,border:"2px solid white" }}/>
      <ProfileCard heading={"Bio"} text={"this is me"}/>
      <ProfileCard heading={"Username"} text={"meRiya"} Icon={UserNameIcon}/>
      <ProfileCard heading={"Name"} text={"Riya"} Icon={FaseIcon}/>
      <ProfileCard heading={"Joined"} text={moment("2025-04-10T18:30:00.000Z").fromNow()} Icon={CalendarIcon}/>
      

    </Stack>
  )
}


const ProfileCard = ({text,Icon,heading}) => {
return(
    <Stack 
    direction={"row"}
     spacing={"1rem"} 
     alignItems={"center"}
     color={"white"}
     textAlign={"center"}>
    {
      Icon && <Icon sx={{fontSize:"2rem"}}/>
    }

    <Stack>
    <Typography variant='body1'>{text}</Typography>
    <Typography color='gray' variant='caption'>{heading}</Typography>

    </Stack>
      </Stack>
)
}

export default ProfileScreen
