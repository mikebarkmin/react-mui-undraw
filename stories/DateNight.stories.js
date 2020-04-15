
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DateNight from '../src/DateNight';

export default {
  title: 'DateNight',
  component: DateNight,
};

export const Primary = () => <DateNight color="primary" />;
export const Secondary = () => <DateNight color="secondary" />;
export const Color = () => <DateNight color={color('color', '#00FF00')} />;
    