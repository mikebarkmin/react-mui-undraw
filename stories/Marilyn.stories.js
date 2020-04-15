
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Marilyn from '../src/Marilyn';

export default {
  title: 'Marilyn',
  component: Marilyn,
};

export const Primary = () => <Marilyn color="primary" />;
export const Secondary = () => <Marilyn color="secondary" />;
export const Color = () => <Marilyn color={color('color', '#00FF00')} />;
    