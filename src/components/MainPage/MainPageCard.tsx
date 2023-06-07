/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
    label: string,
    desc: string
    nav: string
}


export default function MainPageCard({label, desc, nav}: Props): JSX.Element {
    const navigate = useNavigate()
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div style={{marginTop: '10px'}} onClick={() => navigate(`/${nav}`)}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {desc}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </div>
  );
}