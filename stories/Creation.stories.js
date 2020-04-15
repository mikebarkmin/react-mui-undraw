
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Creation from '../src/Creation';

export default {
  title: 'Creation',
  component: Creation,
};

export const Primary = () => <Creation color="primary" />;
export const Secondary = () => <Creation color="secondary" />;
export const Color = () => <Creation color={color('color', '#00FF00')} />;
    