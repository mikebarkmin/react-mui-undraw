
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HorrorMovie from '../src/HorrorMovie';

export default {
  title: 'HorrorMovie',
  component: HorrorMovie,
};

export const Primary = () => <HorrorMovie color="primary" />;
export const Secondary = () => <HorrorMovie color="secondary" />;
export const Color = () => <HorrorMovie color={color('color', '#00FF00')} />;
    