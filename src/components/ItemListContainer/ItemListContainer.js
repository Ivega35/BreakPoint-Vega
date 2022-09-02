import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ItemListContainer = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="140"
          image={data.pictureUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
			{data.tittle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.price}
          </Typography>
		  <Typography variant="body2" color="text.secondary">
            <itemCounter stock={data.stock} />
          </Typography>
        </CardContent>
      
    </Card>
  );
}

export default ItemListContainer; 