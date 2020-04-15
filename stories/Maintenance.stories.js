
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Maintenance from '../src/Maintenance';

export default {
  title: 'Maintenance',
  component: Maintenance,
};

export const Primary = () => <Maintenance color="primary" />;
export const Secondary = () => <Maintenance color="secondary" />;
export const Color = () => <Maintenance color={color('color', '#00FF00')} />;
    