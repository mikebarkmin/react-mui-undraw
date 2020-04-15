
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Airport from '../src/Airport';

export default {
  title: 'Airport',
  component: Airport,
};

export const Primary = () => <Airport color="primary" />;
export const Secondary = () => <Airport color="secondary" />;
export const Color = () => <Airport color={color('color', '#00FF00')} />;
    