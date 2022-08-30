import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCounter from "../ItemCounter/ItemCounter"

 const ItemListContainer = ({tittle, description, price, img, stock}) =>{
  return (
    <Card sx={{ maxWidth: 450 }}>
      
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tittle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>stock: {stock}</p>
          </Typography>
          <ItemCounter stock={stock}/>
        </CardContent>
      
    </Card>
  );
}

export default ItemListContainer;