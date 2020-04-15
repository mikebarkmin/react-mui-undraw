
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Online from '../src/Online';

export default {
  title: 'Online',
  component: Online,
};

export const Primary = () => <Online color="primary" />;
export const Secondary = () => <Online color="secondary" />;
export const Color = () => <Online color={color('color', '#00FF00')} />;
    