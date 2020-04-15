
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GreekFreak from '../src/GreekFreak';

export default {
  title: 'GreekFreak',
  component: GreekFreak,
};

export const Primary = () => <GreekFreak color="primary" />;
export const Secondary = () => <GreekFreak color="secondary" />;
export const Color = () => <GreekFreak color={color('color', '#00FF00')} />;
    