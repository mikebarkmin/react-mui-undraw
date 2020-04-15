
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Verified from '../src/Verified';

export default {
  title: 'Verified',
  component: Verified,
};

export const Primary = () => <Verified color="primary" />;
export const Secondary = () => <Verified color="secondary" />;
export const Color = () => <Verified color={color('color', '#00FF00')} />;
    