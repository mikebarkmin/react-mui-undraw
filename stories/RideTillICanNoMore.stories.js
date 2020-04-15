
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RideTillICanNoMore from '../src/RideTillICanNoMore';

export default {
  title: 'RideTillICanNoMore',
  component: RideTillICanNoMore,
};

export const Primary = () => <RideTillICanNoMore color="primary" />;
export const Secondary = () => <RideTillICanNoMore color="secondary" />;
export const Color = () => <RideTillICanNoMore color={color('color', '#00FF00')} />;
    