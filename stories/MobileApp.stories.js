
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileApp from '../src/MobileApp';

export default {
  title: 'MobileApp',
  component: MobileApp,
};

export const Primary = () => <MobileApp color="primary" />;
export const Secondary = () => <MobileApp color="secondary" />;
export const Color = () => <MobileApp color={color('color', '#00FF00')} />;
    