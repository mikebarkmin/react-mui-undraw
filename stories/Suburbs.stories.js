
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Suburbs from '../src/Suburbs';

export default {
  title: 'Suburbs',
  component: Suburbs,
};

export const Primary = () => <Suburbs color="primary" />;
export const Secondary = () => <Suburbs color="secondary" />;
export const Color = () => <Suburbs color={color('color', '#00FF00')} />;
    