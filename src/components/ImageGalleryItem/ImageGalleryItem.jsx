import { Img } from "./ImageGalleryItem.styled";

import { Component } from "react";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    maxWidth: 'calc (100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // position: 'absolute',
    zIndex: '1101',
    overflow: 'hidden',
    position: 'fixed',
    // maxWidth: '100vw',
    // maxHeight: '100vh',
  },
};

Modal.setAppElement('#root');

export class Image extends Component {
    state = {
        isModalOpen: false,
    }

    openModal = () => this.setState({ isModalOpen: true });
    closeModal = () => this.setState({ isModalOpen: false });
    
    render() {
        const { webformatURL, tags, largeImageURL } = this.props.element;
        const { isModalOpen } = this.state;
        return (
            <>
                <Img src={webformatURL} alt={tags} onClick={this.openModal} />
                
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <img src={largeImageURL} alt={tags} />
                </Modal>
            </>
            
            
        )
    }
}