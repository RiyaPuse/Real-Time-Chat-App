import React from 'react'
import Header from './Header.jsx';
import Title from '../shared/Title';
import { Grid } from '@mui/material';
import ChatList from '../specific/ChatList.jsx';
import { sampleChats } from '../../constens/sampleData.js';
import { useParams } from 'react-router-dom';
import ProfileScreen from '../specific/ProfileScreen.jsx';
import { Box } from '@mui/material';

const AppLayout = () => (WrappedComponent) => {


  // handle delete
  const handleDeleteChat = (e, _id, groupChart) => {
    e.preventDefault();
    console.log("Delete chat", _id, groupChart);
  }

  return (props) => {
    // chat id provider
    const params = useParams();
    const chatId = params.chatId;
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh-4rem)"} spacing={"1rem"}>
          <Grid item size="auto" sm={4} md={3} sx={{ display: { xs: "none", sm: "block" } }} height={"100%"}>
            <ChatList
              chats={sampleChats}
              chatId={chatId} handleDeleteChat={handleDeleteChat}
              newMessagesAlert={[
                {
                  chatId,
                  count: 4,
                }
              ]}
              onlineUsers={["1", "2", "3"]}

            />


          </Grid>


          <Grid item
            size={6}
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}

          >
            <WrappedComponent {...props} />
          </Grid>


          <Grid

            item
            size="grow"
            // sm={3}
            md={4}
            lg={3}
            // height={"100%"}

            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",


            }}
          
          >
            <Box height={"90vh"}>
              <ProfileScreen />
            </Box>


          </Grid>
        </Grid>








      </>
    );
  };
};

export default AppLayout;
