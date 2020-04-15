
import React from 'react';
import { color } from '@storybook/addon-knobs';
import People from '../src/People';

export default {
  title: 'People',
  component: People,
};

export const Primary = () => <People color="primary" />;
export const Secondary = () => <People color="secondary" />;
export const Color = () => <People color={color('color', '#00FF00')} />;
    