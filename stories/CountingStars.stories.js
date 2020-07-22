
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CountingStars from '../src/CountingStars';

export default {
  title: 'CountingStars',
  component: CountingStars,
};

export const Primary = () => <CountingStars color="primary" />;
export const Secondary = () => <CountingStars color="secondary" />;
export const Color = () => <CountingStars color={color('color', '#00FF00')} />;
    