import React from 'react'
import MyPie from '../UI/Pie'

type Props = {
    score: number
}

export default function ResultPage({score}: Props): JSX.Element {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <h3 style={{fontFamily: 'Open Sans'}}>Ваши результаты:</h3>
        <div 
        style={{width: '500px', display: 'flex', justifyContent: 'center'}}
        >
            <MyPie score={score} />
        </div>
    </div>
  )
}
