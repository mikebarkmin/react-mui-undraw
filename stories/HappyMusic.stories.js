
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HappyMusic from '../src/HappyMusic';

export default {
  title: 'HappyMusic',
  component: HappyMusic,
};

export const Primary = () => <HappyMusic color="primary" />;
export const Secondary = () => <HappyMusic color="secondary" />;
export const Color = () => <HappyMusic color={color('color', '#00FF00')} />;
    