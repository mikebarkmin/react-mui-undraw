
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FinishLine from '../src/FinishLine';

export default {
  title: 'FinishLine',
  component: FinishLine,
};

export const Primary = () => <FinishLine color="primary" />;
export const Secondary = () => <FinishLine color="secondary" />;
export const Color = () => <FinishLine color={color('color', '#00FF00')} />;
    