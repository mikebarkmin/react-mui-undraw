
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Conference from '../src/Conference';

export default {
  title: 'Conference',
  component: Conference,
};

export const Primary = () => <Conference color="primary" />;
export const Secondary = () => <Conference color="secondary" />;
export const Color = () => <Conference color={color('color', '#00FF00')} />;
    