
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LaravelAndVue from '../src/LaravelAndVue';

export default {
  title: 'LaravelAndVue',
  component: LaravelAndVue,
};

export const Primary = () => <LaravelAndVue color="primary" />;
export const Secondary = () => <LaravelAndVue color="secondary" />;
export const Color = () => <LaravelAndVue color={color('color', '#00FF00')} />;
    