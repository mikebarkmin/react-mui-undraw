
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Scooter from '../src/Scooter';

export default {
  title: 'Scooter',
  component: Scooter,
};

export const Primary = () => <Scooter color="primary" />;
export const Secondary = () => <Scooter color="secondary" />;
export const Color = () => <Scooter color={color('color', '#00FF00')} />;
    