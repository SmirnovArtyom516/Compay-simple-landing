import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MyButton from '../MyButton/MyButton'
import styles from "./TestCard.module.css"
import type { Quiz } from '../../../api/quiz';

type Props = { 
  quiz: Quiz
  setShowButton: React.Dispatch<React.SetStateAction<boolean>>
  setScore:React.Dispatch<React.SetStateAction<number>>
}

function TestCard({setScore, quiz, setShowButton }: Props): JSX.Element {

  const [error, setError] = React.useState<string>('')
  const [disable, setDisable] = React.useState<boolean>(false)

  const {a, b, c, d}: Quiz = quiz
  const answers: string[] = [a, b, c, d]

  console.log('render')


  return (
    <Card sx={{ maxWidth: 500 }}>
      {quiz?.img && (
        <CardMedia
          component="img"
          alt=""
          image={quiz?.img}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`Вопрос номер ${quiz.id as number}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {quiz.question}
        </Typography>
      </CardContent>
      <CardActions>
        {answers.map((el) => <MyButton setScore={setScore} setDisable={setDisable} disable={disable} el={el} setError={setError} answer={quiz.answer} setShowButton={setShowButton}/>)}
      </CardActions>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </Card>
  );
}

export default TestCard;
