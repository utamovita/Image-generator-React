import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import { Container } from '@material-ui/core';
class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <Container>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </Container>
        )
    }
}

export default App;