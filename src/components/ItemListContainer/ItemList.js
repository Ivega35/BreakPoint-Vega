import Item from './Item'


const ItemList = ({data}) => {


    return(
        <div className="container-fluid">
            <div className= "row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                    {data.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        </div>
        )
}

export default ItemList