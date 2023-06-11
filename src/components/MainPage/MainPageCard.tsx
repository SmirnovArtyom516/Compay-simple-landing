/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
    label: string,
    desc: string,
    nav: string,
    childComponent: any
}


export default function MainPageCard({label, desc, nav, childComponent}: Props): JSX.Element {
    const navigate = useNavigate()
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div style={{marginTop: '10px'}} onClick={() => navigate(`/${nav}`)}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardContent>
            <Typography style={{display: 'flex', alignItems: 'center'}} gutterBottom variant="h5" component="div">
                <p style={{margin: 0}}>{label}</p>
                <div style={{marginLeft:"10px", color: '#f200ff'}}>
                    {childComponent}
                </div>
                
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