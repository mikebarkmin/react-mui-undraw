
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Welcoming from '../src/Welcoming';

export default {
  title: 'Welcoming',
  component: Welcoming,
};

export const Primary = () => <Welcoming color="primary" />;
export const Secondary = () => <Welcoming color="secondary" />;
export const Color = () => <Welcoming color={color('color', '#00FF00')} />;
    