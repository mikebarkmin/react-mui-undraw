
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CharacterDrawing from '../src/CharacterDrawing';

export default {
  title: 'CharacterDrawing',
  component: CharacterDrawing,
};

export const Primary = () => <CharacterDrawing color="primary" />;
export const Secondary = () => <CharacterDrawing color="secondary" />;
export const Color = () => <CharacterDrawing color={color('color', '#00FF00')} />;
    