
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Feedback from '../src/Feedback';

export default {
  title: 'Feedback',
  component: Feedback,
};

export const Primary = () => <Feedback color="primary" />;
export const Secondary = () => <Feedback color="secondary" />;
export const Color = () => <Feedback color={color('color', '#00FF00')} />;
    