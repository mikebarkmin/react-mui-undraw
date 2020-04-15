
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PositiveAttitude from '../src/PositiveAttitude';

export default {
  title: 'PositiveAttitude',
  component: PositiveAttitude,
};

export const Primary = () => <PositiveAttitude color="primary" />;
export const Secondary = () => <PositiveAttitude color="secondary" />;
export const Color = () => <PositiveAttitude color={color('color', '#00FF00')} />;
    