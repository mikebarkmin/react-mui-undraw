
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Campfire from '../src/Campfire';

export default {
  title: 'Campfire',
  component: Campfire,
};

export const Primary = () => <Campfire color="primary" />;
export const Secondary = () => <Campfire color="secondary" />;
export const Color = () => <Campfire color={color('color', '#00FF00')} />;
    