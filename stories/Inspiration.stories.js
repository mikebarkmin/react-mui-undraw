
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Inspiration from '../src/Inspiration';

export default {
  title: 'Inspiration',
  component: Inspiration,
};

export const Primary = () => <Inspiration color="primary" />;
export const Secondary = () => <Inspiration color="secondary" />;
export const Color = () => <Inspiration color={color('color', '#00FF00')} />;
    