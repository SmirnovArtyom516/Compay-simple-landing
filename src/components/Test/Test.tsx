import { Button, PaginationItem } from '@mui/material';
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { type } from 'os';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import PaginationButton from '../UI/PaginationButton/PaginationButton';
import { Quastions } from '../../api/quiz';
import styles from './Test.module.css';
import TestCard from '../UI/TestCard/TestCard';
import type { Quiz } from '../../api/quiz';

type Props = {
  setScore: React.Dispatch<React.SetStateAction<number>>
  score: number
}


function Test({setScore, score}: Props): JSX.Element {
  const [question, setQuestion] = useState<number>(1);
  const [showButton, setShowButton] = useState<boolean>(true)
  const [flag, setFlag] = useState(true);
  
  const navigate = useNavigate()

  const sendEmail = (): void => {
    const data = {to_name: 'Anna', from_name: 'Adriana', message: `you have ${score} points` }
    emailjs.send('service_qe8qsxb', 'template_hn7omjk', data, 'jVPlMHbmjyOhZmwd-').then((response) => {
      console.log('SUCCESS!', response.status, response.text);
   }, (error) => {
      console.log('FAILED...', error);
   });
  }

  const handleChange = (event: React.ChangeEvent<unknown>, p: number): void => {
    console.log(p)
    // const newQ = Quastions.filter((el) => el.id === p)
    setQuestion(p)
  }


  console.log(question);
  console.log(Quastions.length)
  return (
    <div className={styles.testContainer}>
      {flag ? (
        <>
          <h1 style={{fontFamily: 'Open Sans'}}>Чтобы начать тестирование нажмите на кнопку</h1>
          <Button
            onClick={() => {
              setFlag(!flag)
              setQuestion(1)
            }}
            variant="contained"
            sx={{ backgroundColor: 'purple' }}
          >
            Начать
          </Button>
        </>
      ) : (
        <>
        <div className={styles.questionContaiter}>
          <Pagination  
            sx={{pointerEvents: 'none'}}
            count={Quastions.length} 
            hideNextButton
            hidePrevButton
            color='secondary'
            page={question}
            onChange={handleChange}
            />
            <TestCard setScore={setScore} key={Quastions[question - 1]?.id} quiz={Quastions[question - 1]} setShowButton={setShowButton}/>
          </div>
          {question != Quastions.length ? <PaginationButton onClick={() => setQuestion((prev) => prev + 1)} setShowButton={setShowButton} showButton={showButton} /> 
          : <Button onClick={() => {
            sendEmail();
            navigate('/Result');
            }} disabled={showButton}>Завершить</Button>}
          </>
      )}
    </div>
  );
}


export default Test;
