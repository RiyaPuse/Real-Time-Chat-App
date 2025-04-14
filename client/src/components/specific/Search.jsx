import { Dialog, Stack, DialogTitle, TextField, InputAdornment, List, ListItemText } from '@mui/material';
import { useInputValidation } from '6pp';
import React, { useState } from 'react'
import { Search as SearchIcon } from '@mui/icons-material';
import UserItem from './UserItem';
import { sampleUsers } from '../../constens/sampleData.js';

// variable for the search List
// const users=[1 ,2 ,3];

const Search = () => {
  // validation input 
  const search = useInputValidation("");

  let isLoadingSendFriendRequest = false;
  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = (id) => {
    console.log(id);
  }
  // 

  // 
  return (

    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find Pepole</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />

              </InputAdornment>
            ),
          }}
        />

        <List>

          {users.map((i) => (
            <UserItem user={i} key={i._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest} />
          ))}

        </List>
      </Stack>
    </Dialog>
  )
}

export default Search;



