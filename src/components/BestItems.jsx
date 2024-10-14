// function BestItems(props) {
//   return (
//     <>
//     <div className="border flex gap-10 bg-[#FFFFFF] rounded-md p-2">
//         <div>
//             <h3>{props.Title}</h3>
//             <p className="text-sm text-[#9095A0]">{props.Rating}</p>
//             <p className="text-sm text-[#9095A0]">{props.Price}</p>
//             <button className="p-1 m-2 rounded-md border hover:bg-[#636AE8] hover:text-white hover:transition-all duration-1000 text-[#636AE8] border-[#636AE8]">Add to Cart</button>
//         </div>
//         <img className="w-[100px] " src={props.src} alt="" />
//     </div>
//     </>
//   )
// }

// export default BestItems


import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function BestItems(props) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setQuantity(1); 
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    setOrderPlaced(true);
    handleClose();
  };

  const handleSnackbarClose = () => {
    setOrderPlaced(false);
  };

  const totalPrice = quantity * parseFloat(props.Price.replace(/[^0-9.-]+/g,""));

  return (
    <>
      <div className="border flex gap-10 bg-[#FFFFFF] rounded-md p-2">
        <div>
          <h3>{props.Title}</h3>
          <p className="text-sm text-[#9095A0]">{props.Rating}</p>
          <p className="text-sm text-[#9095A0]">{props.Price}</p>
          <button onClick={handleClickOpen} className="p-1 m-2 rounded-md border hover:bg-[#636AE8] hover:text-white hover:transition-all duration-1000 text-[#636AE8] border-[#636AE8]">Add to Cart</button>
        </div>
        <img className="w-[100px]" src={props.src} alt="" />
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.Title}</DialogTitle>
        <DialogContent>
          <img className="w-[100px]" src={props.src} alt="" />
          <Typography variant="body2" color="textSecondary">{props.Rating}</Typography>
          <Typography variant="body2" color="textSecondary">{props.Price}</Typography>
          <div className="flex items-center mt-4">
            <IconButton onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1">{quantity}</Typography>
            <IconButton onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
          </div>
          <Typography variant="body1" className="mt-2">Total Price: ${totalPrice.toFixed(2)}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
          <Button onClick={handleAddToCart} color="primary">Add to Cart</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={orderPlaced}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Your order is placed"
      />
    </>
  );
}

export default BestItems;
