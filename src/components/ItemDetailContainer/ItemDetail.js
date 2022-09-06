import React from 'react'



const ItemDetail = (dataDetail) => {
  return (
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src= {dataDetail.pictureUrl} class="img-fluid rounded-start" alt="Producto"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{dataDetail.title}</h5>
        <p class="card-text"> {dataDetail.description} </p>
        <p class="card-text"> {dataDetail.price}</p>
      </div>
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
    
  </div>
</div>

  )
}

export default ItemDetail;
