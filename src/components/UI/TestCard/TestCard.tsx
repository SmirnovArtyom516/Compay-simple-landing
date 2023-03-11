import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MyButton from '../MyButton/MyButton'
import type { Quiz } from '../../../api/quiz';

type Props = { 
  quiz: Quiz
  id: number
}

function TestCard({ quiz, id }: Props): JSX.Element {

  const [error, setError] = React.useState<string>('')

  const {a, b, c, d}: Quiz = quiz
  const answers: string[] = [a, b, c, d]


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
          {`Вопрос номер ${id}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {quiz.question}
        </Typography>
      </CardContent>
      <CardActions>
        {answers.map((el) => <MyButton el={el} setError={setError} answer={quiz.answer}/>)}
      </CardActions>
      {error && <div>{error}</div>}
    </Card>
  );
}

export default TestCard;
