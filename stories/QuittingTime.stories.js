
import React from 'react';
import { color } from '@storybook/addon-knobs';
import QuittingTime from '../src/QuittingTime';

export default {
  title: 'QuittingTime',
  component: QuittingTime,
};

export const Primary = () => <QuittingTime color="primary" />;
export const Secondary = () => <QuittingTime color="secondary" />;
export const Color = () => <QuittingTime color={color('color', '#00FF00')} />;
    