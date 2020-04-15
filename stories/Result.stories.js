
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Result from '../src/Result';

export default {
  title: 'Result',
  component: Result,
};

export const Primary = () => <Result color="primary" />;
export const Secondary = () => <Result color="secondary" />;
export const Color = () => <Result color={color('color', '#00FF00')} />;
    