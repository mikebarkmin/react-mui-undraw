
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WithLove from '../src/WithLove';

export default {
  title: 'WithLove',
  component: WithLove,
};

export const Primary = () => <WithLove color="primary" />;
export const Secondary = () => <WithLove color="secondary" />;
export const Color = () => <WithLove color={color('color', '#00FF00')} />;
    