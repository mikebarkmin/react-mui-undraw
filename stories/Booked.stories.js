
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Booked from '../src/Booked';

export default {
  title: 'Booked',
  component: Booked,
};

export const Primary = () => <Booked color="primary" />;
export const Secondary = () => <Booked color="secondary" />;
export const Color = () => <Booked color={color('color', '#00FF00')} />;
    