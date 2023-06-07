/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import  MyPie from '../UI/Pie';
import MainPageCard from './MainPageCard';
import Modal from './Modal';

function MainPage(): JSX.Element {
  const [open, setOpen] = React.useState(false);


  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    event.stopPropagation();
    setOpen(!open)
  }

  return( 
    <>
    <div style={{display: 'flex', justifyContent: 'center', marginTop: "80px", columnGap: "30px"}}>
      <div>
          <MainPageCard nav='Пройти тест' label="Пройти тест" desc='Пройдите тест и узнайте свой уровень знаний нашей продукции'/>
          <MainPageCard nav='Блог' label="Текущие акции" desc='Узнайте все о текущих акциях нашей сети'/>
      </div>
      <div>
          <MainPageCard nav='О нас' label='О нас' desc='Узнайте нашу компанию поближе'/>
              <div style={{marginTop: '10px'}} onClick={handleClick}>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                График работы
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Узнайте время работы наших магазинов
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
       </div>
          </div>
       </div>
    <Modal open={open} setOpen={setOpen} />
    {/* <MyPie/> */}
    </>
  )
}

export default MainPage;
