
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Experts from '../src/Experts';

export default {
  title: 'Experts',
  component: Experts,
};

export const Primary = () => <Experts color="primary" />;
export const Secondary = () => <Experts color="secondary" />;
export const Color = () => <Experts color={color('color', '#00FF00')} />;
    