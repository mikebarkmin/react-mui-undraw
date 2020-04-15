
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GrandSlam from '../src/GrandSlam';

export default {
  title: 'GrandSlam',
  component: GrandSlam,
};

export const Primary = () => <GrandSlam color="primary" />;
export const Secondary = () => <GrandSlam color="secondary" />;
export const Color = () => <GrandSlam color={color('color', '#00FF00')} />;
    