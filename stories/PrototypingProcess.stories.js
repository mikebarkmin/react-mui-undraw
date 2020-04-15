
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PrototypingProcess from '../src/PrototypingProcess';

export default {
  title: 'PrototypingProcess',
  component: PrototypingProcess,
};

export const Primary = () => <PrototypingProcess color="primary" />;
export const Secondary = () => <PrototypingProcess color="secondary" />;
export const Color = () => <PrototypingProcess color={color('color', '#00FF00')} />;
    