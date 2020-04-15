
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Circles from '../src/Circles';

export default {
  title: 'Circles',
  component: Circles,
};

export const Primary = () => <Circles color="primary" />;
export const Secondary = () => <Circles color="secondary" />;
export const Color = () => <Circles color={color('color', '#00FF00')} />;
    