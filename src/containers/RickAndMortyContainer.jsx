import React, { Component } from 'react';

class RickAndMortyContainer extends Component {
  state = {
    loading: true,
    characters: [],
  };

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({
      characters,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }
    return <h1>Characters Retrieved!</h1>;
  }
}

export default RickAndMortyContainer;
