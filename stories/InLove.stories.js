
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InLove from '../src/InLove';

export default {
  title: 'InLove',
  component: InLove,
};

export const Primary = () => <InLove color="primary" />;
export const Secondary = () => <InLove color="secondary" />;
export const Color = () => <InLove color={color('color', '#00FF00')} />;
    