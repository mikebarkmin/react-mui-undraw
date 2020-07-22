
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Spreadsheet from '../src/Spreadsheet';

export default {
  title: 'Spreadsheet',
  component: Spreadsheet,
};

export const Primary = () => <Spreadsheet color="primary" />;
export const Secondary = () => <Spreadsheet color="secondary" />;
export const Color = () => <Spreadsheet color={color('color', '#00FF00')} />;
    