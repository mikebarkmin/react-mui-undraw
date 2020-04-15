
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Meeting from '../src/Meeting';

export default {
  title: 'Meeting',
  component: Meeting,
};

export const Primary = () => <Meeting color="primary" />;
export const Secondary = () => <Meeting color="secondary" />;
export const Color = () => <Meeting color={color('color', '#00FF00')} />;
    