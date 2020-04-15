
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WalkDreaming from '../src/WalkDreaming';

export default {
  title: 'WalkDreaming',
  component: WalkDreaming,
};

export const Primary = () => <WalkDreaming color="primary" />;
export const Secondary = () => <WalkDreaming color="secondary" />;
export const Color = () => <WalkDreaming color={color('color', '#00FF00')} />;
    