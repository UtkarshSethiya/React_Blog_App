import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { deleteBlog } from './features/Blogs';
import { useDispatch } from "react-redux";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteBlog({id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  return (
    <div>
      <Button variant='outlined' color='error' onClick={handleOpen}>Delete Blog</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Do you want to delete this blog ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <Button onClick={()=>{ dispatch(deleteBlog(id),handleClose())}} color='error'>Yes</Button>
           <Button onClick={handleClose}>No</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
