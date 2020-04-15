
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Unlock from '../src/Unlock';

export default {
  title: 'Unlock',
  component: Unlock,
};

export const Primary = () => <Unlock color="primary" />;
export const Secondary = () => <Unlock color="secondary" />;
export const Color = () => <Unlock color={color('color', '#00FF00')} />;
    