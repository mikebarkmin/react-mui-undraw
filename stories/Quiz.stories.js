
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Quiz from '../src/Quiz';

export default {
  title: 'Quiz',
  component: Quiz,
};

export const Primary = () => <Quiz color="primary" />;
export const Secondary = () => <Quiz color="secondary" />;
export const Color = () => <Quiz color={color('color', '#00FF00')} />;
    