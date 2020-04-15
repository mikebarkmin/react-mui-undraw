
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Videographer from '../src/Videographer';

export default {
  title: 'Videographer',
  component: Videographer,
};

export const Primary = () => <Videographer color="primary" />;
export const Secondary = () => <Videographer color="secondary" />;
export const Color = () => <Videographer color={color('color', '#00FF00')} />;
    