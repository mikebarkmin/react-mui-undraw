
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FastLoading from '../src/FastLoading';

export default {
  title: 'FastLoading',
  component: FastLoading,
};

export const Primary = () => <FastLoading color="primary" />;
export const Secondary = () => <FastLoading color="secondary" />;
export const Color = () => <FastLoading color={color('color', '#00FF00')} />;
    