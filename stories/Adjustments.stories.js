
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Adjustments from '../src/Adjustments';

export default {
  title: 'Adjustments',
  component: Adjustments,
};

export const Primary = () => <Adjustments color="primary" />;
export const Secondary = () => <Adjustments color="secondary" />;
export const Color = () => <Adjustments color={color('color', '#00FF00')} />;
    