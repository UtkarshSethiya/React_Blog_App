import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from "@mui/icons-material/Menu";
import EdgesensorLowIcon from "@mui/icons-material/EdgesensorLow";
import PublicIcon from "@mui/icons-material/Public";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { useDispatch,useSelector } from "react-redux";
import { filterBlogbyCategory } from "./features/Blogs";
export default function Sidebar({darkMode}) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>
         
      <List>
      <ListItem disablePadding>
          <ListItemButton onClick={()=>{dispatch(filterBlogbyCategory({category:'Home'}))}}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>{dispatch(filterBlogbyCategory({category:'Technology'}))}}>
            <ListItemIcon>
              <EdgesensorLowIcon />
            </ListItemIcon>
            <ListItemText primary={"TECHNOLOGY"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>{dispatch(filterBlogbyCategory({category:'Travel'}))}}>
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <ListItemText primary={"TRAVEL"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>{dispatch(filterBlogbyCategory({category:'Food'}))}}>
            <ListItemIcon>
              <FastfoodIcon />
            </ListItemIcon>
            <ListItemText primary={"FOOD"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>{dispatch(filterBlogbyCategory({category:'Lifestyle'}))}}>
            <ListItemIcon>
              <MapsHomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary={"LIFESTYLE"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
  
    </Box>
  );

  return (
    <div>
      <Button style={{ color:`${darkMode?'white':'black'}`  }} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
