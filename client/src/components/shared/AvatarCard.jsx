// import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
// import React from 'react'
// // To do transfom avatar to avatar group
// const AvatarCard = (avatar = [], max = 4) => {
//   return (
//     <Stack direction={"row"} spacing={1}>
//       <AvatarGroup>
//         <Box width={"5rem"} height={"3rem"}>
//           {
//             avatar.map((i, index) => (
//               <Avatar ker={Math.random() * 100} src={i}
//                 alt={`Avatar ${index}`}
//                 sx={{
//                   width: "3rem",
//                   height: "3rem",
//                   position: "absolute",
//                   left: {
//                     xs: `${0.5 + index}rem`,
//                     sm: `${index}rem`
//                   }
//                 }}
//               />
//               )
//             )
  
//           }

//         </Box>
//       </AvatarGroup>
//     </Stack>
//   )
// }

// export default AvatarCard


import { Avatar, AvatarGroup, Box, Stack } from '@mui/material';
import React from 'react';

// Transform avatar array to AvatarGroup
const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={1}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"} sx={{ position: "relative" }}>
          {
            avatar.map((i, index) => (
              <Avatar
                key={index} // ✅ use "key"
                src={i}
                alt={`Avatar ${index}`}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left: {
                    xs: `${0.5 + index}rem`,
                    sm: `${index}rem`
                  }
                }}
              />
            ))
          }
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;

