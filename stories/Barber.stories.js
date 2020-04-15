
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Barber from '../src/Barber';

export default {
  title: 'Barber',
  component: Barber,
};

export const Primary = () => <Barber color="primary" />;
export const Secondary = () => <Barber color="secondary" />;
export const Color = () => <Barber color={color('color', '#00FF00')} />;
    