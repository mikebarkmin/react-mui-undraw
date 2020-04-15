
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Schedule from '../src/Schedule';

export default {
  title: 'Schedule',
  component: Schedule,
};

export const Primary = () => <Schedule color="primary" />;
export const Secondary = () => <Schedule color="secondary" />;
export const Color = () => <Schedule color={color('color', '#00FF00')} />;
    