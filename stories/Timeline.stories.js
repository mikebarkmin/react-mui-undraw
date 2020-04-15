
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Timeline from '../src/Timeline';

export default {
  title: 'Timeline',
  component: Timeline,
};

export const Primary = () => <Timeline color="primary" />;
export const Secondary = () => <Timeline color="secondary" />;
export const Color = () => <Timeline color={color('color', '#00FF00')} />;
    