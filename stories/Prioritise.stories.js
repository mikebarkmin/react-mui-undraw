
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Prioritise from '../src/Prioritise';

export default {
  title: 'Prioritise',
  component: Prioritise,
};

export const Primary = () => <Prioritise color="primary" />;
export const Secondary = () => <Prioritise color="secondary" />;
export const Color = () => <Prioritise color={color('color', '#00FF00')} />;
    