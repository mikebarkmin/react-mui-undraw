
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyLocation from '../src/MyLocation';

export default {
  title: 'MyLocation',
  component: MyLocation,
};

export const Primary = () => <MyLocation color="primary" />;
export const Secondary = () => <MyLocation color="secondary" />;
export const Color = () => <MyLocation color={color('color', '#00FF00')} />;
    