
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ThroughTheWindow from '../src/ThroughTheWindow';

export default {
  title: 'ThroughTheWindow',
  component: ThroughTheWindow,
};

export const Primary = () => <ThroughTheWindow color="primary" />;
export const Secondary = () => <ThroughTheWindow color="secondary" />;
export const Color = () => <ThroughTheWindow color={color('color', '#00FF00')} />;
    