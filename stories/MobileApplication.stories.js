
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileApplication from '../src/MobileApplication';

export default {
  title: 'MobileApplication',
  component: MobileApplication,
};

export const Primary = () => <MobileApplication color="primary" />;
export const Secondary = () => <MobileApplication color="secondary" />;
export const Color = () => <MobileApplication color={color('color', '#00FF00')} />;
    