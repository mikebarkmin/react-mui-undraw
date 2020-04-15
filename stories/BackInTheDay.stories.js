
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BackInTheDay from '../src/BackInTheDay';

export default {
  title: 'BackInTheDay',
  component: BackInTheDay,
};

export const Primary = () => <BackInTheDay color="primary" />;
export const Secondary = () => <BackInTheDay color="secondary" />;
export const Color = () => <BackInTheDay color={color('color', '#00FF00')} />;
    