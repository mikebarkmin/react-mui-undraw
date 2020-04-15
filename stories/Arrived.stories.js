
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Arrived from '../src/Arrived';

export default {
  title: 'Arrived',
  component: Arrived,
};

export const Primary = () => <Arrived color="primary" />;
export const Secondary = () => <Arrived color="secondary" />;
export const Color = () => <Arrived color={color('color', '#00FF00')} />;
    