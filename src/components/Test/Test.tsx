import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Quastions } from '../../api/quiz';
import styles from './Test.module.css';
import TestCard from '../UI/TestCard/TestCard';
import type { Quiz } from '../../api/quiz';

function Test(): JSX.Element {
  const [question, setQuestion] = useState<Quiz[]>([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setQuestion(Quastions);
  }, []);

  console.log(question);
  return (
    <div className={styles.testContainer}>
      {flag ? (
        <>
          <h1>Чтобы начать тестирование нажмите на кнопку</h1>
          <Button
            onClick={() => setFlag(!flag)}
            variant="contained"
            sx={{ backgroundColor: 'purple' }}
          >
            Начать
          </Button>
        </>
      ) : (
        <>
          {question.forEach((el) => (
            <TestCard key={el.question} quiz={el} />
          ))}
        </>
      )}
    </div>
  );
}

export default Test;
