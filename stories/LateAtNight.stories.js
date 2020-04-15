
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LateAtNight from '../src/LateAtNight';

export default {
  title: 'LateAtNight',
  component: LateAtNight,
};

export const Primary = () => <LateAtNight color="primary" />;
export const Secondary = () => <LateAtNight color="secondary" />;
export const Color = () => <LateAtNight color={color('color', '#00FF00')} />;
    