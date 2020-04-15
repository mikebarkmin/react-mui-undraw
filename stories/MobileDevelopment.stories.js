
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileDevelopment from '../src/MobileDevelopment';

export default {
  title: 'MobileDevelopment',
  component: MobileDevelopment,
};

export const Primary = () => <MobileDevelopment color="primary" />;
export const Secondary = () => <MobileDevelopment color="secondary" />;
export const Color = () => <MobileDevelopment color={color('color', '#00FF00')} />;
    