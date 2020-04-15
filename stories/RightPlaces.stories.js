
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RightPlaces from '../src/RightPlaces';

export default {
  title: 'RightPlaces',
  component: RightPlaces,
};

export const Primary = () => <RightPlaces color="primary" />;
export const Secondary = () => <RightPlaces color="secondary" />;
export const Color = () => <RightPlaces color={color('color', '#00FF00')} />;
    