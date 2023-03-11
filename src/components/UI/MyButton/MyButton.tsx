import type { Dispatch, SetStateAction } from 'react';
import React from 'react'
import Button from '@mui/material/Button';

type Props = { 
  el: string
  setError: Dispatch<SetStateAction<string>>
  answer: string
}

function MyButton({el, setError, answer}: Props): JSX.Element {

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
  const [touched, settouched] = React.useState<boolean>()
  const [correct, setCorrect] = React.useState<string>('')
  const checkAnswerHandler = (e: React.MouseEvent<HTMLElement>): void => {
    if(answer === e.currentTarget.textContent){ 
      setCorrect('да')
    }else{
      setCorrect('нет');
      setError('Ответ неправильный')
    }
  }

  // console.log(foo(correct))


  return (
     <Button color={getColor(correct)} size="small" variant="contained" onClick={checkAnswerHandler}>{el}</Button>
  )
}


export default MyButton
