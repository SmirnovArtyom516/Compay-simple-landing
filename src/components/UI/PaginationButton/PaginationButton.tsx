import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

type Props = {
    setShowButton: React.Dispatch<React.SetStateAction<boolean>>
    showButton: boolean
    onClick: () => void
  }
  
  function PaginationButton({setShowButton, showButton, onClick}: Props): JSX.Element {


    const clickHandler = (): void => {
      onClick()
      setShowButton(true)
    }
    return (
      <Button onClick={clickHandler} sx={{margin: '0px 0px 0px 400px', backgroundColor: 'purple'}} disabled={showButton} variant="contained" endIcon={<SendIcon />}>
      Далее
    </Button>
    )
  }

  export default PaginationButton