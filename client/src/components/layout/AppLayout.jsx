import React from 'react'
import Header from './Header.jsx';
import Title from '../shared/Title';
import { Grid } from '@mui/material';
import ChatList from '../specific/ChatList.jsx';
import { sampleChats } from '../../constens/sampleData.js';

const AppLayout = () => WrappedComponent => {

  return (props) => {
    return (
      <>
        <Title />
        <Header />
       <Grid container height={"calc(100vh-4rem)"} spacing={"1rem"}>
            <Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" } }} height={"100%"}>
            <ChatList chats={sampleChats} 
            chatId={"1"}
            newMessagesAlert={[
              {
                chatId:"1",
                count:4,
              }
            ]}
            // onlineUsers={["1","2"]}
            />
          
            
            </Grid>
      
      
            <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
            </Grid>
      
            <Grid item md={4} lg={3} height={"100%"} sx={{
              display: { xs: "none", md: "block" },
      
            }}>
              third one side
             
            </Grid>
          </Grid>
      





        

      </>
    );
  };
};

export default AppLayout
