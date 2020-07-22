
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SwipeOptions from '../src/SwipeOptions';

export default {
  title: 'SwipeOptions',
  component: SwipeOptions,
};

export const Primary = () => <SwipeOptions color="primary" />;
export const Secondary = () => <SwipeOptions color="secondary" />;
export const Color = () => <SwipeOptions color={color('color', '#00FF00')} />;
    