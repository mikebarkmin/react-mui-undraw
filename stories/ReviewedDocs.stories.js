
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ReviewedDocs from '../src/ReviewedDocs';

export default {
  title: 'ReviewedDocs',
  component: ReviewedDocs,
};

export const Primary = () => <ReviewedDocs color="primary" />;
export const Secondary = () => <ReviewedDocs color="secondary" />;
export const Color = () => <ReviewedDocs color={color('color', '#00FF00')} />;
    