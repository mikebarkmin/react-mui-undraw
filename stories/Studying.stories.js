
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Studying from '../src/Studying';

export default {
  title: 'Studying',
  component: Studying,
};

export const Primary = () => <Studying color="primary" />;
export const Secondary = () => <Studying color="secondary" />;
export const Color = () => <Studying color={color('color', '#00FF00')} />;
    