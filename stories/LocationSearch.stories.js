
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LocationSearch from '../src/LocationSearch';

export default {
  title: 'LocationSearch',
  component: LocationSearch,
};

export const Primary = () => <LocationSearch color="primary" />;
export const Secondary = () => <LocationSearch color="secondary" />;
export const Color = () => <LocationSearch color={color('color', '#00FF00')} />;
    