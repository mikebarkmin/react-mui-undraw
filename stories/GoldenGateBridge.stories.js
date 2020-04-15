
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GoldenGateBridge from '../src/GoldenGateBridge';

export default {
  title: 'GoldenGateBridge',
  component: GoldenGateBridge,
};

export const Primary = () => <GoldenGateBridge color="primary" />;
export const Secondary = () => <GoldenGateBridge color="secondary" />;
export const Color = () => <GoldenGateBridge color={color('color', '#00FF00')} />;
    