
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OuterSpace from '../src/OuterSpace';

export default {
  title: 'OuterSpace',
  component: OuterSpace,
};

export const Primary = () => <OuterSpace color="primary" />;
export const Secondary = () => <OuterSpace color="secondary" />;
export const Color = () => <OuterSpace color={color('color', '#00FF00')} />;
    