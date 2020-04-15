
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DroneDelivery from '../src/DroneDelivery';

export default {
  title: 'DroneDelivery',
  component: DroneDelivery,
};

export const Primary = () => <DroneDelivery color="primary" />;
export const Secondary = () => <DroneDelivery color="secondary" />;
export const Color = () => <DroneDelivery color={color('color', '#00FF00')} />;
    