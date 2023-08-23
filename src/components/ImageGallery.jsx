import { ImageGalleryItem } from "./ImageGalleryItem"

export const ImageGallery = ({imagesCollection, modal}) => {
    return (
        <ul className="gallery">
            <ImageGalleryItem imagesCollection={imagesCollection} modal={ modal} />
        </ul>
    )
}