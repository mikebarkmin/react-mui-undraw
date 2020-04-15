
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Logistics from '../src/Logistics';

export default {
  title: 'Logistics',
  component: Logistics,
};

export const Primary = () => <Logistics color="primary" />;
export const Secondary = () => <Logistics color="secondary" />;
export const Color = () => <Logistics color={color('color', '#00FF00')} />;
    