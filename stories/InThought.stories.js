
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InThought from '../src/InThought';

export default {
  title: 'InThought',
  component: InThought,
};

export const Primary = () => <InThought color="primary" />;
export const Secondary = () => <InThought color="secondary" />;
export const Color = () => <InThought color={color('color', '#00FF00')} />;
    