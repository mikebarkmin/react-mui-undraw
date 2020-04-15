
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MissedChances from '../src/MissedChances';

export default {
  title: 'MissedChances',
  component: MissedChances,
};

export const Primary = () => <MissedChances color="primary" />;
export const Secondary = () => <MissedChances color="secondary" />;
export const Color = () => <MissedChances color={color('color', '#00FF00')} />;
    