import React, { ReactNode } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import './style.scss';

interface iProps {
  Exit?: () => void;
  children?: ReactNode;
}

export default function NavbarLeft(props: iProps) {

  return (
    <div className="NavbarLeft">
      <Drawer
        variant="permanent"
        anchor="left"
      >
        <h3>VNTS</h3>

        <List
          className="drawer"
        >
          <ListItem button component="a" href="/new">
            <ListItemText primary="New" />
          </ListItem>
          <ListItem button component="a" href="/load">
            <ListItemText primary="Load" />
          </ListItem>
          {/* <ListItem button alignItems="center">
            <ListItemText primary="Exit" /> //TODO: if the project is running in a browser hide this
          </ListItem> */}
        </List>
      </Drawer>
    </div>
  );
}