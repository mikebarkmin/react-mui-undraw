
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Artist from '../src/Artist';

export default {
  title: 'Artist',
  component: Artist,
};

export const Primary = () => <Artist color="primary" />;
export const Secondary = () => <Artist color="secondary" />;
export const Color = () => <Artist color={color('color', '#00FF00')} />;
    