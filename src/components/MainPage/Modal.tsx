import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({open, setOpen}: Props): JSX.Element {
    
  
  
    const handleClose = (): void => {
      setOpen(false);
    };
  
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            График
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p style={{fontFamily: 'Open Sans'}}>Понедельник - 9:00 до 20:00</p>
              <br />
              <p style={{fontFamily: 'Open Sans'}}>Вторник - 9:00 до 20:00</p>
              <br />
              <p style={{fontFamily: 'Open Sans'}}>Пятница - 9:00 до 20:00</p>
              <br />
              <p style={{fontFamily: 'Open Sans'}}>Суббота - 9:00 до 20:00</p>
              <br />
              <p style={{fontFamily: 'Open Sans'}}>Воскресенье - 9:00 до 20:00</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }