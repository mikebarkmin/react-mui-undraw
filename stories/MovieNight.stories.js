
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MovieNight from '../src/MovieNight';

export default {
  title: 'MovieNight',
  component: MovieNight,
};

export const Primary = () => <MovieNight color="primary" />;
export const Secondary = () => <MovieNight color="secondary" />;
export const Color = () => <MovieNight color={color('color', '#00FF00')} />;
    