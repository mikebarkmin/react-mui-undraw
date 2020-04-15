
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Trends from '../src/Trends';

export default {
  title: 'Trends',
  component: Trends,
};

export const Primary = () => <Trends color="primary" />;
export const Secondary = () => <Trends color="secondary" />;
export const Color = () => <Trends color={color('color', '#00FF00')} />;
    