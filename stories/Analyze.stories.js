
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Analyze from '../src/Analyze';

export default {
  title: 'Analyze',
  component: Analyze,
};

export const Primary = () => <Analyze color="primary" />;
export const Secondary = () => <Analyze color="secondary" />;
export const Color = () => <Analyze color={color('color', '#00FF00')} />;
    