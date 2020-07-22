
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GrowthCurve from '../src/GrowthCurve';

export default {
  title: 'GrowthCurve',
  component: GrowthCurve,
};

export const Primary = () => <GrowthCurve color="primary" />;
export const Secondary = () => <GrowthCurve color="secondary" />;
export const Color = () => <GrowthCurve color={color('color', '#00FF00')} />;
    