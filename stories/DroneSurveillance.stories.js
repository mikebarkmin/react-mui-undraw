
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DroneSurveillance from '../src/DroneSurveillance';

export default {
  title: 'DroneSurveillance',
  component: DroneSurveillance,
};

export const Primary = () => <DroneSurveillance color="primary" />;
export const Secondary = () => <DroneSurveillance color="secondary" />;
export const Color = () => <DroneSurveillance color={color('color', '#00FF00')} />;
    