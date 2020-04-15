
import React from 'react';
import { color } from '@storybook/addon-knobs';
import KeyPoints from '../src/KeyPoints';

export default {
  title: 'KeyPoints',
  component: KeyPoints,
};

export const Primary = () => <KeyPoints color="primary" />;
export const Secondary = () => <KeyPoints color="secondary" />;
export const Color = () => <KeyPoints color={color('color', '#00FF00')} />;
    