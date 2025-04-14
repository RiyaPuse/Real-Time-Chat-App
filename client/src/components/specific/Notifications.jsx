// import React from 'react';
// import { memo } from 'react';
// // import { Avatar, IconButton, ListItem, Typography ,Stack } from '@mui/material'
// import { ListItem, Dialog, DialogTitle, Stack, Typography, Button, } from "@mui/material"
// import { sampleNotifications } from '../../constens/sampleData';

// const Notifications = () => {
//   const FriendRequestHandler=({ _id, accept})=>{}
//   return (
//     <Dialog open>
//       <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
//         <DialogTitle>Notifications</DialogTitle>
//         {
//           sampleNotifications.length > 0 ? (sampleNotifications.map((i)=> <NotificationItem sender={i.sender} _id={i._id } handler={FriendRequestHandler} key={i._id}/>))
//            : (<Typography textAlign={"center"}>0 Notification</Typography>)

//         }

//       </Stack>
//     </Dialog>
//   )
// };




// const NotificationItem=memo( ({sender,_id,handler})=>{
//   const {name,Avatar}=sender

//   return (
//       <div className='user-item' onClick={handler} data-userid={_id}>
//        <ListItem 
//       >
//         <Stack 
//         direction={"row"}
//         alignItems={'center'} 
//         spacing={'1rem'}
//         width={'100%'}
  
//         >
//           <Avatar/>
//           <Typography
//           variant='body1'
//           sx={{
//             flexGrow:1,
//             display:'-webkit-box',
//             WebkitLineClamp:"vertical",
//             overflow:"hidden",
//             textOverflow:"ellipsis",
//             // bgcolor:'gray',
//             width:"100%"
  
  
//           }}
//           >{`${name} sent you a friend request`}
//           </Typography>
           
//            <Stack
//            direction={{
//             xs:"column",
//             sm:"row"
//            }}
//            >
//             <Button onClick={()=>handler({_id,accept:true})}>Accept</Button>
//             <Button color='error' onClick={()=>handler({_id,accept:false})}>Reject</Button>
//            </Stack>
  
//         </Stack>
//        </ListItem>
//       </div>
//     )
// })

// export default Notifications



import React, { memo } from 'react';
import {
  ListItem,
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { sampleNotifications } from '../../constens/sampleData';

const Notifications = () => {
  const FriendRequestHandler = ({ _id, accept }) => {
    console.log(`Friend request ${accept ? 'accepted' : 'rejected'} for ID: ${_id}`);
  };

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {
          sampleNotifications.length > 0 ? (
            sampleNotifications.map((i) => (
              <NotificationItem
                sender={i.sender}
                _id={i._id}
                handler={FriendRequestHandler}
                key={i._id}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>0 Notification</Typography>
          )
        }
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender; // renamed to avoid clashing with Avatar component

  return (
    <div className='user-item' data-userid={_id}>
      <ListItem>
        <Stack
          direction={"row"}
          alignItems={'center'}
          spacing={'1rem'}
          width={'100%'}
        >
          <Avatar src={avatar} alt={name} />

          <Typography
            variant='body1'
            sx={{
              flexGrow: 1,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: "100%",
            }}
          >
            {`${name} sent you a friend request`}
          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row"
            }}
            spacing={1}
          >
            <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
            <Button color='error' onClick={() => handler({ _id, accept: false })}>Reject</Button>
          </Stack>
        </Stack>
      </ListItem>
    </div>
  );
});

export default Notifications;

