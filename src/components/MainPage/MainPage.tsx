/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
          <MainPageCard childComponent={<ChecklistIcon />} nav='Пройти тест' label="Пройти тест" desc='Пройдите тест и узнайте свой уровень знаний нашей продукции'/>
          <MainPageCard childComponent={<AutoGraphIcon />}  nav='Блог' label="Текущие акции" desc='Узнайте все о текущих акциях нашей сети'/>
      </div>
      <div>
          <MainPageCard childComponent={<HelpOutlineIcon />}  nav='О нас' label='О нас' desc='Узнайте нашу компанию поближе'/>
            <div style={{marginTop: '10px'}} onClick={handleClick}>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                <Typography style={{display: 'flex', alignItems: 'center'}} gutterBottom variant="h5" component="div">
                <p style={{margin: 0}}>График работы</p> 
                <div style={{marginLeft:" 10px", color: '#f200ff'}}>
                  <CalendarMonthIcon/>
                </div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Узнайте свой график работы
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
