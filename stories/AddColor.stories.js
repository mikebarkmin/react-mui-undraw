
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddColor from '../src/AddColor';

export default {
  title: 'AddColor',
  component: AddColor,
};

export const Primary = () => <AddColor color="primary" />;
export const Secondary = () => <AddColor color="secondary" />;
export const Color = () => <AddColor color={color('color', '#00FF00')} />;
    