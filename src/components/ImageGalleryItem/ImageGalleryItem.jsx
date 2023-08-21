import { Component } from "react";
import { Modal } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
     state = {
    isOpenModal: false,
    };
    
   toggleModal = () => {
  this.setState(prevState => ({
    isOpenModal: !prevState.isOpenModal,
  }));
};


    render() {
        const { webformatURL, largeImageURL, tags } = this.props.image;
        return (
            <li>
                <img onClick={this.toggleModal} src={webformatURL} alt={tags} />
                {this.state.isOpenModal && (
                    <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
                )}
            </li>
        )
    }
}