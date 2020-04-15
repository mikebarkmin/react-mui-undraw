
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Superhero from '../src/Superhero';

export default {
  title: 'Superhero',
  component: Superhero,
};

export const Primary = () => <Superhero color="primary" />;
export const Secondary = () => <Superhero color="secondary" />;
export const Color = () => <Superhero color={color('color', '#00FF00')} />;
    