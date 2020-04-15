
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Creativity from '../src/Creativity';

export default {
  title: 'Creativity',
  component: Creativity,
};

export const Primary = () => <Creativity color="primary" />;
export const Secondary = () => <Creativity color="secondary" />;
export const Color = () => <Creativity color={color('color', '#00FF00')} />;
    