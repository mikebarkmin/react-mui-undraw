
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineDating from '../src/OnlineDating';

export default {
  title: 'OnlineDating',
  component: OnlineDating,
};

export const Primary = () => <OnlineDating color="primary" />;
export const Secondary = () => <OnlineDating color="secondary" />;
export const Color = () => <OnlineDating color={color('color', '#00FF00')} />;
    