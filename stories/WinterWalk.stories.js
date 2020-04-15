
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WinterWalk from '../src/WinterWalk';

export default {
  title: 'WinterWalk',
  component: WinterWalk,
};

export const Primary = () => <WinterWalk color="primary" />;
export const Secondary = () => <WinterWalk color="secondary" />;
export const Color = () => <WinterWalk color={color('color', '#00FF00')} />;
    