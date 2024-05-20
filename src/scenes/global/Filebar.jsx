import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';


function Filebar(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Component ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}


export default function VirtualizedList() {
  return (
    <Box
      sx={{ width: '100%', height: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={650}
        width={360}
        itemSize={30}
        itemCount={50}
        overscanCount={5}
      >
        {Filebar}
      </FixedSizeList>
    </Box>
  );
}