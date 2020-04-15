
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyPassword from '../src/MyPassword';

export default {
  title: 'MyPassword',
  component: MyPassword,
};

export const Primary = () => <MyPassword color="primary" />;
export const Secondary = () => <MyPassword color="secondary" />;
export const Color = () => <MyPassword color={color('color', '#00FF00')} />;
    