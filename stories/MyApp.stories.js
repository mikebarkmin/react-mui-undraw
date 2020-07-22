
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyApp from '../src/MyApp';

export default {
  title: 'MyApp',
  component: MyApp,
};

export const Primary = () => <MyApp color="primary" />;
export const Secondary = () => <MyApp color="secondary" />;
export const Color = () => <MyApp color={color('color', '#00FF00')} />;
    