
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VisionaryTechnology from '../src/VisionaryTechnology';

export default {
  title: 'VisionaryTechnology',
  component: VisionaryTechnology,
};

export const Primary = () => <VisionaryTechnology color="primary" />;
export const Secondary = () => <VisionaryTechnology color="secondary" />;
export const Color = () => <VisionaryTechnology color={color('color', '#00FF00')} />;
    