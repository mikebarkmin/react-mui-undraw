
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Confirmed from '../src/Confirmed';

export default {
  title: 'Confirmed',
  component: Confirmed,
};

export const Primary = () => <Confirmed color="primary" />;
export const Secondary = () => <Confirmed color="secondary" />;
export const Color = () => <Confirmed color={color('color', '#00FF00')} />;
    