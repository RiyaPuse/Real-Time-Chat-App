import { styled } from '@mui/material';
import {Link as LinkComponent} from "react-router-dom";
import { grayColor } from '../../constens/color';
export  const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  

  &:hover {
    text-decoration: none;
    background-color: #0f0f0f;
    color: white;
  }
`;


// chat file input box
export const InputBox = styled('input')`
width: 100%;
height: 100%;
outline: none;
border:none;
padding:0 3rem;
border-radius: 1.5rem;
font-size: 1.5rem;
background-color:${grayColor};
`;
  