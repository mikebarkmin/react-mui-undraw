
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GameDay from '../src/GameDay';

export default {
  title: 'GameDay',
  component: GameDay,
};

export const Primary = () => <GameDay color="primary" />;
export const Secondary = () => <GameDay color="secondary" />;
export const Color = () => <GameDay color={color('color', '#00FF00')} />;
    