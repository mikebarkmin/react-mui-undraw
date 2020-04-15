
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Doctor from '../src/Doctor';

export default {
  title: 'Doctor',
  component: Doctor,
};

export const Primary = () => <Doctor color="primary" />;
export const Secondary = () => <Doctor color="secondary" />;
export const Color = () => <Doctor color={color('color', '#00FF00')} />;
    