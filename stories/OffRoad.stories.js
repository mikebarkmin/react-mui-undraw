
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OffRoad from '../src/OffRoad';

export default {
  title: 'OffRoad',
  component: OffRoad,
};

export const Primary = () => <OffRoad color="primary" />;
export const Secondary = () => <OffRoad color="secondary" />;
export const Color = () => <OffRoad color={color('color', '#00FF00')} />;
    