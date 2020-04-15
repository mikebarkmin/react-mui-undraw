
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WinterRoad from '../src/WinterRoad';

export default {
  title: 'WinterRoad',
  component: WinterRoad,
};

export const Primary = () => <WinterRoad color="primary" />;
export const Secondary = () => <WinterRoad color="secondary" />;
export const Color = () => <WinterRoad color={color('color', '#00FF00')} />;
    