
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Confirm from '../src/Confirm';

export default {
  title: 'Confirm',
  component: Confirm,
};

export const Primary = () => <Confirm color="primary" />;
export const Secondary = () => <Confirm color="secondary" />;
export const Color = () => <Confirm color={color('color', '#00FF00')} />;
    