import React, { Component } from 'react';
import { fetchCharacters } from '../../services/RickAndMortyApi';
import CharacterList from '../components/app/characters/CharacterList';

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
    const { loading, characters } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }
    return <CharacterList characters={characters} />;
  }
}

export default RickAndMortyContainer;
