
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FeelingBlue from '../src/FeelingBlue';

export default {
  title: 'FeelingBlue',
  component: FeelingBlue,
};

export const Primary = () => <FeelingBlue color="primary" />;
export const Secondary = () => <FeelingBlue color="secondary" />;
export const Color = () => <FeelingBlue color={color('color', '#00FF00')} />;
    