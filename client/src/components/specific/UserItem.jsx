import { Avatar, IconButton, ListItem, Typography ,Stack } from '@mui/material'
import React, { memo } from 'react'

const UserItem = ( {user,handler,handlerIsLoading}) => {
  const {name,_id,avatar} = user
  return (
    <div className='user-item' onClick={handler} data-userid={_id}>
     <ListItem 
    >
      <Stack 
      direction={"row"}
      alignItems={'center'} 
      spacing={'1rem'}
      width={'100%'}

      >
        <Avatar/>
        <Typography
        variant='body1'
        sx={{
          flexGrow:1,
          display:'-webkit-box',
          WebkitLineClamp:"vertical",
          overflow:"hidden",
          textOverflow:"ellipsis",
          // bgcolor:'gray',
          width:"100%"


        }}
        >{name}
        </Typography>
        <IconButton 
        size='small'
        sx={{
          bgcolor:'primary.main',
          color:'white',
          ":&:hover":{bgcolor:'primary.dark'},

        }}
        onClick={()=>handler(_id)} disabled={handlerIsLoading}>
          +</IconButton> 

      </Stack>
     </ListItem>
    </div>
  )
}

export default memo( UserItem);
