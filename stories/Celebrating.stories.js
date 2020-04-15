
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Celebrating from '../src/Celebrating';

export default {
  title: 'Celebrating',
  component: Celebrating,
};

export const Primary = () => <Celebrating color="primary" />;
export const Secondary = () => <Celebrating color="secondary" />;
export const Color = () => <Celebrating color={color('color', '#00FF00')} />;
    