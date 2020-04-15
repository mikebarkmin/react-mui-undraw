
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Review from '../src/Review';

export default {
  title: 'Review',
  component: Review,
};

export const Primary = () => <Review color="primary" />;
export const Secondary = () => <Review color="secondary" />;
export const Color = () => <Review color={color('color', '#00FF00')} />;
    