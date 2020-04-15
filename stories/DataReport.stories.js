
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DataReport from '../src/DataReport';

export default {
  title: 'DataReport',
  component: DataReport,
};

export const Primary = () => <DataReport color="primary" />;
export const Secondary = () => <DataReport color="secondary" />;
export const Color = () => <DataReport color={color('color', '#00FF00')} />;
    