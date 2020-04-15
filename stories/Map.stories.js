
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Map from '../src/Map';

export default {
  title: 'Map',
  component: Map,
};

export const Primary = () => <Map color="primary" />;
export const Secondary = () => <Map color="secondary" />;
export const Color = () => <Map color={color('color', '#00FF00')} />;
    