import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';




const Messages = ({messages}) => {

    

  return (
    <List >
        {messages.flatMap((message,index) => [
            <div >   

        <ListItem key={index} alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary = {message}
          
        />
      </ListItem> 
      <Divider key={'divider_'+index} variant="inset" component="li" />
      </div> ] )}
      
    </List>
  );
}
export default Messages;