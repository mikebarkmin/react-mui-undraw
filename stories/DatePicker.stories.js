
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DatePicker from '../src/DatePicker';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

export const Primary = () => <DatePicker color="primary" />;
export const Secondary = () => <DatePicker color="secondary" />;
export const Color = () => <DatePicker color={color('color', '#00FF00')} />;
    