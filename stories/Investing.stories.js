
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Investing from '../src/Investing';

export default {
  title: 'Investing',
  component: Investing,
};

export const Primary = () => <Investing color="primary" />;
export const Secondary = () => <Investing color="secondary" />;
export const Color = () => <Investing color={color('color', '#00FF00')} />;
    