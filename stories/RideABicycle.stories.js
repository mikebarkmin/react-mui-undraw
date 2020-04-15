
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RideABicycle from '../src/RideABicycle';

export default {
  title: 'RideABicycle',
  component: RideABicycle,
};

export const Primary = () => <RideABicycle color="primary" />;
export const Secondary = () => <RideABicycle color="secondary" />;
export const Color = () => <RideABicycle color={color('color', '#00FF00')} />;
    