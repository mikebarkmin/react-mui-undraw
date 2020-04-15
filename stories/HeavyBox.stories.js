
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HeavyBox from '../src/HeavyBox';

export default {
  title: 'HeavyBox',
  component: HeavyBox,
};

export const Primary = () => <HeavyBox color="primary" />;
export const Secondary = () => <HeavyBox color="secondary" />;
export const Color = () => <HeavyBox color={color('color', '#00FF00')} />;
    