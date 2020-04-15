
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FuturisticInterface from '../src/FuturisticInterface';

export default {
  title: 'FuturisticInterface',
  component: FuturisticInterface,
};

export const Primary = () => <FuturisticInterface color="primary" />;
export const Secondary = () => <FuturisticInterface color="secondary" />;
export const Color = () => <FuturisticInterface color={color('color', '#00FF00')} />;
    