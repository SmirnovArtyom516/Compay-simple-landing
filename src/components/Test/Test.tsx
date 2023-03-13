import { Button, PaginationItem } from '@mui/material';
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { type } from 'os';
import PaginationButton from '../UI/PaginationButton/PaginationButton';
import { Quastions } from '../../api/quiz';
import styles from './Test.module.css';
import TestCard from '../UI/TestCard/TestCard';
import type { Quiz } from '../../api/quiz';




function Test(): JSX.Element {
  const [question, setQuestion] = useState<number>(1);
  const [showButton, setShowButton] = useState<boolean>(true)
  const [flag, setFlag] = useState(true);

  const handleChange = (event: React.ChangeEvent<unknown>, p: number): void => {
    console.log(p)
    // const newQ = Quastions.filter((el) => el.id === p)
    setQuestion(p)
  }


  console.log(question);
  return (
    <div className={styles.testContainer}>
      {flag ? (
        <>
          <h1>Чтобы начать тестирование нажмите на кнопку</h1>
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
            <TestCard key={Quastions[question - 1]?.id} quiz={Quastions[question - 1]} setShowButton={setShowButton}/>
          </div>
          <PaginationButton onClick={() => setQuestion((prev) => prev + 1)} setShowButton={setShowButton} showButton={showButton} />
          </>
      )}
    </div>
  );
}


export default Test;
