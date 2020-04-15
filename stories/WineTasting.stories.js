
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WineTasting from '../src/WineTasting';

export default {
  title: 'WineTasting',
  component: WineTasting,
};

export const Primary = () => <WineTasting color="primary" />;
export const Secondary = () => <WineTasting color="secondary" />;
export const Color = () => <WineTasting color={color('color', '#00FF00')} />;
    