
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StaticAssets from '../src/StaticAssets';

export default {
  title: 'StaticAssets',
  component: StaticAssets,
};

export const Primary = () => <StaticAssets color="primary" />;
export const Secondary = () => <StaticAssets color="secondary" />;
export const Color = () => <StaticAssets color={color('color', '#00FF00')} />;
    