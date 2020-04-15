
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DreamWorld from '../src/DreamWorld';

export default {
  title: 'DreamWorld',
  component: DreamWorld,
};

export const Primary = () => <DreamWorld color="primary" />;
export const Secondary = () => <DreamWorld color="secondary" />;
export const Color = () => <DreamWorld color={color('color', '#00FF00')} />;
    