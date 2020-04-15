
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Businesswoman from '../src/Businesswoman';

export default {
  title: 'Businesswoman',
  component: Businesswoman,
};

export const Primary = () => <Businesswoman color="primary" />;
export const Secondary = () => <Businesswoman color="secondary" />;
export const Color = () => <Businesswoman color={color('color', '#00FF00')} />;
    