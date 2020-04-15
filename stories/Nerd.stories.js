
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Nerd from '../src/Nerd';

export default {
  title: 'Nerd',
  component: Nerd,
};

export const Primary = () => <Nerd color="primary" />;
export const Secondary = () => <Nerd color="secondary" />;
export const Color = () => <Nerd color={color('color', '#00FF00')} />;
    