
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EverydayLife from '../src/EverydayLife';

export default {
  title: 'EverydayLife',
  component: EverydayLife,
};

export const Primary = () => <EverydayLife color="primary" />;
export const Secondary = () => <EverydayLife color="secondary" />;
export const Color = () => <EverydayLife color={color('color', '#00FF00')} />;
    