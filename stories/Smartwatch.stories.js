
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Smartwatch from '../src/Smartwatch';

export default {
  title: 'Smartwatch',
  component: Smartwatch,
};

export const Primary = () => <Smartwatch color="primary" />;
export const Secondary = () => <Smartwatch color="secondary" />;
export const Color = () => <Smartwatch color={color('color', '#00FF00')} />;
    