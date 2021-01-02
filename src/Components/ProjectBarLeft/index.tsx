import React, { ReactNode } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import './style.scss';



export default function ProjectBarLeft() {

  return (
    <div className="NavbarLeft">
      <Drawer
        variant="permanent"
        anchor="left"
      >
        <h3>Project name here</h3>

        <List
          className="drawer"
        >
          <ListItem button component="a" href="/meta">
            <ListItemText primary="Meta" />
          </ListItem>
          <ListItem button component="a" href="/scenes">
            <ListItemText primary="Scenes" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}