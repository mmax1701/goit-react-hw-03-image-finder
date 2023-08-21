import { Component } from "react";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  hendleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

    render() {
const { largeImageURL, tags } = this.props;

        return (
            <div class="overlay" onClick={this.hendleOverlayClick}>
                <div class="modal">
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>
        )
    
    }
}

