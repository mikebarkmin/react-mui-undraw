
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SnowGames from '../src/SnowGames';

export default {
  title: 'SnowGames',
  component: SnowGames,
};

export const Primary = () => <SnowGames color="primary" />;
export const Secondary = () => <SnowGames color="secondary" />;
export const Color = () => <SnowGames color={color('color', '#00FF00')} />;
    