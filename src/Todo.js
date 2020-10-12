
import {List,ListItem,ListItemAvatar,ListItemText} from '@material-ui/core';
import React from 'react';
import './Todo.css';


function Todo(props) {
    return (
        <div className="todo_list">
            <List>
                <ListItem>
                    <ListItemAvatar>

                    </ListItemAvatar>
                    <ListItemText primary={props.text} secondary="end..."/>
                </ListItem>
            </List>
            
        </div>
    )
}

export default Todo
