
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SpreadLove from '../src/SpreadLove';

export default {
  title: 'SpreadLove',
  component: SpreadLove,
};

export const Primary = () => <SpreadLove color="primary" />;
export const Secondary = () => <SpreadLove color="secondary" />;
export const Color = () => <SpreadLove color={color('color', '#00FF00')} />;
    