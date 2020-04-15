
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Mello from '../src/Mello';

export default {
  title: 'Mello',
  component: Mello,
};

export const Primary = () => <Mello color="primary" />;
export const Secondary = () => <Mello color="secondary" />;
export const Color = () => <Mello color={color('color', '#00FF00')} />;
    