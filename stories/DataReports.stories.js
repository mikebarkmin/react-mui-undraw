
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DataReports from '../src/DataReports';

export default {
  title: 'DataReports',
  component: DataReports,
};

export const Primary = () => <DataReports color="primary" />;
export const Secondary = () => <DataReports color="secondary" />;
export const Color = () => <DataReports color={color('color', '#00FF00')} />;
    