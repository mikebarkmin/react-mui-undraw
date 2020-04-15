
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PairProgramming from '../src/PairProgramming';

export default {
  title: 'PairProgramming',
  component: PairProgramming,
};

export const Primary = () => <PairProgramming color="primary" />;
export const Secondary = () => <PairProgramming color="secondary" />;
export const Color = () => <PairProgramming color={color('color', '#00FF00')} />;
    