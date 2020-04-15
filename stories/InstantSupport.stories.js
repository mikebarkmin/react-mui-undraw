
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InstantSupport from '../src/InstantSupport';

export default {
  title: 'InstantSupport',
  component: InstantSupport,
};

export const Primary = () => <InstantSupport color="primary" />;
export const Secondary = () => <InstantSupport color="secondary" />;
export const Color = () => <InstantSupport color={color('color', '#00FF00')} />;
    