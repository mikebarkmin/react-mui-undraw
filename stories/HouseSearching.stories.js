
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HouseSearching from '../src/HouseSearching';

export default {
  title: 'HouseSearching',
  component: HouseSearching,
};

export const Primary = () => <HouseSearching color="primary" />;
export const Secondary = () => <HouseSearching color="secondary" />;
export const Color = () => <HouseSearching color={color('color', '#00FF00')} />;
    