
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Treasure from '../src/Treasure';

export default {
  title: 'Treasure',
  component: Treasure,
};

export const Primary = () => <Treasure color="primary" />;
export const Secondary = () => <Treasure color="secondary" />;
export const Color = () => <Treasure color={color('color', '#00FF00')} />;
    