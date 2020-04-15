
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Polaroid from '../src/Polaroid';

export default {
  title: 'Polaroid',
  component: Polaroid,
};

export const Primary = () => <Polaroid color="primary" />;
export const Secondary = () => <Polaroid color="secondary" />;
export const Color = () => <Polaroid color={color('color', '#00FF00')} />;
    