import type { Dispatch, SetStateAction} from 'react';
import React, { useState } from 'react';

import Button from '@mui/material/Button';

type Props = { 
  el: string
  setError: Dispatch<SetStateAction<string>>
  answer: string
  setShowButton: React.Dispatch<React.SetStateAction<boolean>>
  disable: boolean
  setDisable: React.Dispatch<React.SetStateAction<boolean>>
}

function MyButton({el, setError, answer, setShowButton, disable, setDisable}: Props): JSX.Element {

  const [touched, setTouched] = useState<boolean>(true)

  function getColor(correct: string | undefined): 'success' | 'error' | 'primary'  {
    switch (correct) {
      case 'да':
        return "success";
      case 'нет':
        return "error";
      default:
        return "primary";
    }
  }

  const [correct, setCorrect] = React.useState<string>('')

  // disable = false
  
  const checkAnswerHandler = (e: React.MouseEvent<HTMLElement>): void => {
    if(answer === e.currentTarget.textContent){ 
      setCorrect('да')
      setShowButton(false)
      setTouched(false)
      setDisable(true)
      
    }else{
      setCorrect('нет');
      setError('Ответ неправильный')
      setShowButton(false)
      setTouched(false)
      setDisable(true)
      
    }
  }


  return (
     <Button disabled={touched && disable ? disable : !true} color={getColor(correct)} size="small" variant="contained" onClick={checkAnswerHandler}>{el}</Button>
  )
}


export default MyButton
