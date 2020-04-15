
import React from 'react';
import { color } from '@storybook/addon-knobs';
import IntoTheNight from '../src/IntoTheNight';

export default {
  title: 'IntoTheNight',
  component: IntoTheNight,
};

export const Primary = () => <IntoTheNight color="primary" />;
export const Secondary = () => <IntoTheNight color="secondary" />;
export const Color = () => <IntoTheNight color={color('color', '#00FF00')} />;
    