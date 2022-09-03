import Item from './Item'


const ItemList = (props) => {


    return(
        <div className="container-fluid">
            <div className= "row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    {props.data.map(art => (
                        <Item key={art.id} nombre={art.title} img={art.pictureUrl} precio={art.price}/>
                    ))}
            </div>
        </div>
        )
}




export default ItemList