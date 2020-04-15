
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BugFixing from '../src/BugFixing';

export default {
  title: 'BugFixing',
  component: BugFixing,
};

export const Primary = () => <BugFixing color="primary" />;
export const Secondary = () => <BugFixing color="secondary" />;
export const Color = () => <BugFixing color={color('color', '#00FF00')} />;
    