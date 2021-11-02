import { render, screen } from '@testing-library/react';
import React, { Component } from 'react';
import RickAndMortyContainer from './RickAndMortyContainer';

describe('Rick and Morty Container', () => {
  it('Displays a list of characters', async () => {
    render(<RickAndMortyContainer />);
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
