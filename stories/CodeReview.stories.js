
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CodeReview from '../src/CodeReview';

export default {
  title: 'CodeReview',
  component: CodeReview,
};

export const Primary = () => <CodeReview color="primary" />;
export const Secondary = () => <CodeReview color="secondary" />;
export const Color = () => <CodeReview color={color('color', '#00FF00')} />;
    