
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Baby from '../src/Baby';

export default {
  title: 'Baby',
  component: Baby,
};

export const Primary = () => <Baby color="primary" />;
export const Secondary = () => <Baby color="secondary" />;
export const Color = () => <Baby color={color('color', '#00FF00')} />;
    