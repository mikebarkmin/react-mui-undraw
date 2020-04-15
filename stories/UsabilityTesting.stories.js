
import React from 'react';
import { color } from '@storybook/addon-knobs';
import UsabilityTesting from '../src/UsabilityTesting';

export default {
  title: 'UsabilityTesting',
  component: UsabilityTesting,
};

export const Primary = () => <UsabilityTesting color="primary" />;
export const Secondary = () => <UsabilityTesting color="secondary" />;
export const Color = () => <UsabilityTesting color={color('color', '#00FF00')} />;
    