
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ThroughTheDesert from '../src/ThroughTheDesert';

export default {
  title: 'ThroughTheDesert',
  component: ThroughTheDesert,
};

export const Primary = () => <ThroughTheDesert color="primary" />;
export const Secondary = () => <ThroughTheDesert color="secondary" />;
export const Color = () => <ThroughTheDesert color={color('color', '#00FF00')} />;
    