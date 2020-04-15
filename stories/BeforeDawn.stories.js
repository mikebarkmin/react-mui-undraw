
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BeforeDawn from '../src/BeforeDawn';

export default {
  title: 'BeforeDawn',
  component: BeforeDawn,
};

export const Primary = () => <BeforeDawn color="primary" />;
export const Secondary = () => <BeforeDawn color="secondary" />;
export const Color = () => <BeforeDawn color={color('color', '#00FF00')} />;
    