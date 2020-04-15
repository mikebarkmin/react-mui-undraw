
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AirSupport from '../src/AirSupport';

export default {
  title: 'AirSupport',
  component: AirSupport,
};

export const Primary = () => <AirSupport color="primary" />;
export const Secondary = () => <AirSupport color="secondary" />;
export const Color = () => <AirSupport color={color('color', '#00FF00')} />;
    