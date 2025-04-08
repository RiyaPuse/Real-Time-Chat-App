import React, { memo } from 'react'
import { Link } from "../styles/StyleComponent.jsx"
import { Stack, Typography } from '@mui/material'


const ChatItem = ({
  avatar = [],
  name,
  _id,
  sameSender,
  groupChart = false,

  isOnline,
  newMessageAlert,
  index = 0
  , handleDeleteChatOpen }) => {
  return <Link sx={{
    padding:"0",
  }} to={`/chats/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChart)}>
    <div style={{
      width:"20rem",
      display: "flex",
      gap: "1rem",
      alighnItems: "center",
      padding: "1rem",
      backgroundColor: sameSender ? "lightgray" : "unset",
      color: sameSender ? "white" : "unset",
      justifyContent: "space-between",
      position: "relative"

    }}>
      {/* Avatar card */}
      {/* in this stack first it print name than it print how many new message  */}
      <Stack>
        <Typography>{name}</Typography>
        {
          newMessageAlert && (
            <Typography> {newMessageAlert.count} New Message </Typography>
          )
        }
      </Stack>

      {
        isOnline && <Box
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "green",
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)"

          }}

        />
      }
    </div>
  </Link>
}

export default memo(ChatItem)
