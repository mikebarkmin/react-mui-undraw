
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LocationTracking from '../src/LocationTracking';

export default {
  title: 'LocationTracking',
  component: LocationTracking,
};

export const Primary = () => <LocationTracking color="primary" />;
export const Secondary = () => <LocationTracking color="secondary" />;
export const Color = () => <LocationTracking color={color('color', '#00FF00')} />;
    