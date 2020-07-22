
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineLearning from '../src/OnlineLearning';

export default {
  title: 'OnlineLearning',
  component: OnlineLearning,
};

export const Primary = () => <OnlineLearning color="primary" />;
export const Secondary = () => <OnlineLearning color="secondary" />;
export const Color = () => <OnlineLearning color={color('color', '#00FF00')} />;
    