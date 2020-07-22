
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ScreenTime from '../src/ScreenTime';

export default {
  title: 'ScreenTime',
  component: ScreenTime,
};

export const Primary = () => <ScreenTime color="primary" />;
export const Secondary = () => <ScreenTime color="secondary" />;
export const Color = () => <ScreenTime color={color('color', '#00FF00')} />;
    