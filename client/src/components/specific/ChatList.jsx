import React from 'react'
import { Stack } from '@mui/material'

const ChatList = ({ 
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = []
  , newMessagesAlert = [
    {
      chatId: "",
      count: 0
    },

  ],
handleDeleteChat, }) => {
  return (
    <div>
      <Stack width={w} direction={"column"} >
        {chats?.map((data) => {

      return <div>something something </div>
        }) }

      </Stack>
    </div>
  )
}

export default ChatList;
