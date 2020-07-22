
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FashionPhotoshoot from '../src/FashionPhotoshoot';

export default {
  title: 'FashionPhotoshoot',
  component: FashionPhotoshoot,
};

export const Primary = () => <FashionPhotoshoot color="primary" />;
export const Secondary = () => <FashionPhotoshoot color="secondary" />;
export const Color = () => <FashionPhotoshoot color={color('color', '#00FF00')} />;
    