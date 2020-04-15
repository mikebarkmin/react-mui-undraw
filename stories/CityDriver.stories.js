
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CityDriver from '../src/CityDriver';

export default {
  title: 'CityDriver',
  component: CityDriver,
};

export const Primary = () => <CityDriver color="primary" />;
export const Secondary = () => <CityDriver color="secondary" />;
export const Color = () => <CityDriver color={color('color', '#00FF00')} />;
    