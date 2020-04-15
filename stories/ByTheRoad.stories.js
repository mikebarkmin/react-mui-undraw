
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ByTheRoad from '../src/ByTheRoad';

export default {
  title: 'ByTheRoad',
  component: ByTheRoad,
};

export const Primary = () => <ByTheRoad color="primary" />;
export const Secondary = () => <ByTheRoad color="secondary" />;
export const Color = () => <ByTheRoad color={color('color', '#00FF00')} />;
    