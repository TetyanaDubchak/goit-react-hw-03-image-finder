import { Image } from "../ImageGalleryItem/ImageGalleryItem"
import { Gallery, Item } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export const ImageGallery = ({imagesCollection}) => {
    return (
        <Gallery >
            {imagesCollection.map(el => (
                <Item key={el.id} >
                    <Image element={ el} />
                </Item> )
          )}
            
        </Gallery>
    )
}

ImageGallery.propTypes = {
    imagesCollection: PropTypes.array,

}