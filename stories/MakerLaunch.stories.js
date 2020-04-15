
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MakerLaunch from '../src/MakerLaunch';

export default {
  title: 'MakerLaunch',
  component: MakerLaunch,
};

export const Primary = () => <MakerLaunch color="primary" />;
export const Secondary = () => <MakerLaunch color="secondary" />;
export const Color = () => <MakerLaunch color={color('color', '#00FF00')} />;
    