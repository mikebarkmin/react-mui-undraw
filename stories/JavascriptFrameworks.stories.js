
import React from 'react';
import { color } from '@storybook/addon-knobs';
import JavascriptFrameworks from '../src/JavascriptFrameworks';

export default {
  title: 'JavascriptFrameworks',
  component: JavascriptFrameworks,
};

export const Primary = () => <JavascriptFrameworks color="primary" />;
export const Secondary = () => <JavascriptFrameworks color="secondary" />;
export const Color = () => <JavascriptFrameworks color={color('color', '#00FF00')} />;
    