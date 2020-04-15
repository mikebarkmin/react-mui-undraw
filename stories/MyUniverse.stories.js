
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyUniverse from '../src/MyUniverse';

export default {
  title: 'MyUniverse',
  component: MyUniverse,
};

export const Primary = () => <MyUniverse color="primary" />;
export const Secondary = () => <MyUniverse color="secondary" />;
export const Color = () => <MyUniverse color={color('color', '#00FF00')} />;
    