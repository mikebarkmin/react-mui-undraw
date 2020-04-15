
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Spreadsheets from '../src/Spreadsheets';

export default {
  title: 'Spreadsheets',
  component: Spreadsheets,
};

export const Primary = () => <Spreadsheets color="primary" />;
export const Secondary = () => <Spreadsheets color="secondary" />;
export const Color = () => <Spreadsheets color={color('color', '#00FF00')} />;
    