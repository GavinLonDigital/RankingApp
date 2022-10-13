const Item = ({item, drag, itemImgObj }) => {
    return (
        <div className="unranked-cell">
            <img key={`item-${item.id}`} id={`item-${item.id}`} src={itemImgObj.image}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
            />
        </div>     
    )
}
export default Item;