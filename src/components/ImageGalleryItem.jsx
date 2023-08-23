
export const ImageGalleryItem = ({ imagesCollection, modal}) => {
    return (
        <>
            {imagesCollection.map(el => (
                <li key={el.id} className="gallery-item">
                    <button onClick = {() => modal(el.largeImageURL)}> <img src= {el.webformatURL} alt="" /> </button>
                </li> )
          )}
        
       </>
        
    )
}