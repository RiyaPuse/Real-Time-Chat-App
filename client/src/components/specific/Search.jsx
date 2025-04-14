import { Dialog, Stack,DialogTitle, TextField, InputAdornment, List, ListItemText } from '@mui/material';
import  {useInputValidation} from '6pp';
import React from 'react'
import { Search as SearchIcon } from '@mui/icons-material';

// variable for the search List
const users=[1 ,2 ,3];

const Search = () => {
  // validation input 
  const search=useInputValidation("");
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


  {/* list  */}
  
    <List>
{
  users.map((user)=>(
<ListItem>
  <ListItemText/>
  
</ListItem>
  )
)
}
    </List>
  </Stack>
    </Dialog>
  )
}

export default Search;



