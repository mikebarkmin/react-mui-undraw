
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GameWorld from '../src/GameWorld';

export default {
  title: 'GameWorld',
  component: GameWorld,
};

export const Primary = () => <GameWorld color="primary" />;
export const Secondary = () => <GameWorld color="secondary" />;
export const Color = () => <GameWorld color={color('color', '#00FF00')} />;
    