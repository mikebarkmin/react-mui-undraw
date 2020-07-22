
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyCurrentLocation from '../src/MyCurrentLocation';

export default {
  title: 'MyCurrentLocation',
  component: MyCurrentLocation,
};

export const Primary = () => <MyCurrentLocation color="primary" />;
export const Secondary = () => <MyCurrentLocation color="secondary" />;
export const Color = () => <MyCurrentLocation color={color('color', '#00FF00')} />;
    