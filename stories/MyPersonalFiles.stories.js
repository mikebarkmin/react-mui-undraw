
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyPersonalFiles from '../src/MyPersonalFiles';

export default {
  title: 'MyPersonalFiles',
  component: MyPersonalFiles,
};

export const Primary = () => <MyPersonalFiles color="primary" />;
export const Secondary = () => <MyPersonalFiles color="secondary" />;
export const Color = () => <MyPersonalFiles color={color('color', '#00FF00')} />;
    