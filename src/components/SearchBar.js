import React from 'react';
import { TextField, Button } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {

        return (
            <div className="searchContainer">
                <h1>Image generator</h1>
                <form onSubmit={this.onFormSubmit}>
                    <TextField
                        label="type anything :)"
                        variant="outlined"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                    <Button
                        type="submit"
                        onClick={this.onFormSubmit}
                        color="primary"
                        variant="contained"
                    >
                        Search
                    </Button>
                </form>
            </div>
        )
    }
}

export default SearchBar;