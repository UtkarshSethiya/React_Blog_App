import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { addBlogs } from "./features/Blogs";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "10px",

  transform: "translate(-50%, -50%)",
    width: '90%',
  maxHeight: "800px",
  //    overflowY:'scroll',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreateBlog() {
  const date=new Date();
  let defaultInput = {
    title: "",
    description: "",
    author: "",
    category: "",
    img: "",
    postedAt: date.toLocaleString(),
    
  };
  const [blogData, setBlogData] = useState(defaultInput);
  const blogList = useSelector((state) => state.blogs.value);
  const dispatch = useDispatch();


 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div style={{ textAlign: "right", margin: "20px" }}>
        <Button variant="contained" onClick={handleOpen}>
          Create Blog
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
          <TextField
            required
            fullWidth
            value={blogData.title}
            onChange={(e)=>{setBlogData({...blogData,title:e.target.value})}}
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />

          <TextField
            required
            style={{ marginTop: "10px" }}
            value={blogData.description}
            onChange={(e)=>{setBlogData({...blogData,description:e.target.value})}}
            id="outlined-multiline-flexible"
            fullWidth
            label="Descripton"
            multiline
            rows={4}
          />

          <TextField
            required
            style={{ marginTop: "10px" }}
            value={blogData.img}
            onChange={(e)=>{setBlogData({...blogData,img:e.target.value}); }}
            fullWidth
            id="outlined-basic"
            label="Paste Image URL"
            variant="outlined"
          />
          <TextField
            required
            style={{ marginTop: "10px" }}
            value={blogData.author}
            onChange={(e)=>{setBlogData({...blogData,author:e.target.value})}}
            fullWidth
            id="outlined-basic"
            label="Author Name"
            variant="outlined"
          />
          <FormControl style={{ marginTop: "10px" }} fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={blogData.category}
              label="Category"
              onChange={(e)=>{setBlogData({...blogData,category:e.target.value});}}
            > <MenuItem value={'Technology'}>Technology</MenuItem>
              <MenuItem value={'Food'}>Food</MenuItem>
              <MenuItem value={'Lifestyle'}>Lifestyle</MenuItem>
              <MenuItem value={'Travel'}>Travel</MenuItem>
            </Select>
            </FormControl> 
       
          <div style={{ marginTop: "10px", textAlign: "end" }}>
            <Button onClick={()=>{
                if(blogData.title==undefined || blogData.author=="" ||blogData.description=="" ||blogData.img=="" ||blogData.category==''  ){
                    alert("All Fields are Mandatory")
                }
                else{
               
                  
                 dispatch(
                    addBlogs(
                     { 
                      id: blogList.length+1,
                      title: blogData.title,
                      description: blogData.description,
                      author: blogData.author,
                      img:blogData.img,
                      postedAt:blogData.postedAt,
                      category:blogData.category

                    }),
                 
                  );
                  setBlogData(defaultInput);
              
                  handleClose()
                }
            }} sx={{ marginRight: "5px" }} variant="contained">
              Submit
            </Button>
            <Button onClick={handleClose} variant="outlined">Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
