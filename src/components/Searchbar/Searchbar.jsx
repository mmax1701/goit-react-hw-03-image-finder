import { Component } from "react";




export class Searchbar extends Component {
      state = {
    searcheQuery: '',
    };
    handleInputChange = (event) => {
      this.setState({
        searcheQuery: event.target.value,
      });
    };
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.searcheQuery);
        this.setState({
          searcheQuery: '',
        });
    };

    render() {
        return (
            <header>
                <form onSubmit={this.handleFormSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>

                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searcheQuery}
                        onChange={this.handleInputChange}
                    />
                </form>
            </header>
        )
    }
}