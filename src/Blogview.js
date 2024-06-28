import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius:"10px",
  
  transform: 'translate(-50%, -50%)',
//   width: '100%',
 maxHeight:'700px',
 overflowY:'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Blogview({id,setOpenModal}) {

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
}
const blogData = useSelector((state) => state.blogs.value.filter((param)=>param.id==id)[0]);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            {blogData.title}
          </Typography>
          <Typography >
            <img className='img'  src={blogData.img} />
          </Typography>
         
          <p id="modal-modal-description" sx={{ mt: 2 }}>
           {blogData.description}
          </p>
          <div>
            Author- {blogData.author} 

          </div>
          <div>
            Posted On- {blogData.postedAt}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

