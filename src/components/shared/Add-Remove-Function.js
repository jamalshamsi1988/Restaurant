import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import  AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';


export default function AddRemoveFunction() {
  const [count, setCount] = useState(0);




  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection:'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 2,
        },
      }}
    >
        <Box >
    <Badge color="secondary" badgeContent={count} >
          <AddShoppingCartIcon  sx={{ color:"#343A54"}}/>
        </Badge>
      </Box>
      <div>
        
        <Box sx={{ display: 'flex', flexDirection:'column'}}>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small"  sx={{backgroundColor:"#343A54" , color:"#ffff" }}/>
          </Button>
         
          
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small"  sx={{backgroundColor:"#343A54" , color:"#ffff" }}/>
            </Button>
        </Box>

    
      </div>
        
    </Box>
  );
}