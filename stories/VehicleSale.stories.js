
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VehicleSale from '../src/VehicleSale';

export default {
  title: 'VehicleSale',
  component: VehicleSale,
};

export const Primary = () => <VehicleSale color="primary" />;
export const Secondary = () => <VehicleSale color="secondary" />;
export const Color = () => <VehicleSale color={color('color', '#00FF00')} />;
    