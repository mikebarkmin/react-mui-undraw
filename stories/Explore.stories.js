
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Explore from '../src/Explore';

export default {
  title: 'Explore',
  component: Explore,
};

export const Primary = () => <Explore color="primary" />;
export const Secondary = () => <Explore color="secondary" />;
export const Color = () => <Explore color={color('color', '#00FF00')} />;
    