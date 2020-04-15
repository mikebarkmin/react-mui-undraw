
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AroundTheWorld from '../src/AroundTheWorld';

export default {
  title: 'AroundTheWorld',
  component: AroundTheWorld,
};

export const Primary = () => <AroundTheWorld color="primary" />;
export const Secondary = () => <AroundTheWorld color="secondary" />;
export const Color = () => <AroundTheWorld color={color('color', '#00FF00')} />;
    