
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FileSynchronization from '../src/FileSynchronization';

export default {
  title: 'FileSynchronization',
  component: FileSynchronization,
};

export const Primary = () => <FileSynchronization color="primary" />;
export const Secondary = () => <FileSynchronization color="secondary" />;
export const Color = () => <FileSynchronization color={color('color', '#00FF00')} />;
    