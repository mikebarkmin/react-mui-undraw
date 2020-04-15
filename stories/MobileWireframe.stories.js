
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileWireframe from '../src/MobileWireframe';

export default {
  title: 'MobileWireframe',
  component: MobileWireframe,
};

export const Primary = () => <MobileWireframe color="primary" />;
export const Secondary = () => <MobileWireframe color="secondary" />;
export const Color = () => <MobileWireframe color={color('color', '#00FF00')} />;
    