import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCounter from "../ItemCounter/ItemCounter"


const ItemListContainer = ({ data}) => {
 
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="170"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
			      {data.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <p>precio: ${data.price}</p>
          </Typography>
          
        </CardContent>
      
    </Card>
  );
}

export default ItemListContainer; 