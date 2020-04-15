
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DifferentLove from '../src/DifferentLove';

export default {
  title: 'DifferentLove',
  component: DifferentLove,
};

export const Primary = () => <DifferentLove color="primary" />;
export const Secondary = () => <DifferentLove color="secondary" />;
export const Color = () => <DifferentLove color={color('color', '#00FF00')} />;
    