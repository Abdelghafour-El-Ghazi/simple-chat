import React,{useState} from 'react';
import { TextField } from '@material-ui/core';

const MessageBox= ({onSendMessage:PushMessage}) => {
    const [message,setMessage]=useState('');
    return (
        <div>
            <TextField
          id="standard-basic"
          label="Messages"
          multiline
          fullWidth
          onChange={evt => setMessage(evt.target.value)}
          onKeyDown={evt => 
        {if(evt.key === 'Enter') {evt.preventDefault()
            PushMessage(message)
            setMessage('');} }}
          rows={4}
          value={message}
          variant="outlined"
        />
        </div>
    )
}

export default MessageBox;