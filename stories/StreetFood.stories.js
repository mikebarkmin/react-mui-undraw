
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StreetFood from '../src/StreetFood';

export default {
  title: 'StreetFood',
  component: StreetFood,
};

export const Primary = () => <StreetFood color="primary" />;
export const Secondary = () => <StreetFood color="secondary" />;
export const Color = () => <StreetFood color={color('color', '#00FF00')} />;
    