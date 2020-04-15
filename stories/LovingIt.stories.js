
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LovingIt from '../src/LovingIt';

export default {
  title: 'LovingIt',
  component: LovingIt,
};

export const Primary = () => <LovingIt color="primary" />;
export const Secondary = () => <LovingIt color="secondary" />;
export const Color = () => <LovingIt color={color('color', '#00FF00')} />;
    