import React, { ReactNode } from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import './style.scss';

interface iProps {
  Exit?: () => void;
  children?: ReactNode;
}

export default function NavbarLeft(props: iProps) {

  const preventDefault = (event: any) => event.preventDefault();
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
          <ListItem button component="a" href="/project/new">
            <ListItemText primary="New" />
          </ListItem>
          <ListItem button component="a" href="/project/load">
            <ListItemText primary="Load" />
          </ListItem>
          <ListItem button alignItems="center">
            <ListItemText primary="Exit" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}