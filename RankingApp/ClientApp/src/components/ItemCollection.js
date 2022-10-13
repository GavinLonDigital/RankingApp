import Item from './Item';

const ItemCollection = ({ items, drag, imgArr }) => {

    return(
        <div className="items-not-ranked">
            {
                items.map((item) => (item.ranking === 0)
                    ? <Item key={`item-${item.id}`} item={item} drag={drag}
                        itemImgObj={imgArr.find(o => o.id === item.imageId)} />
                    :null)
            }
         </div>
    )
}
export default ItemCollection;