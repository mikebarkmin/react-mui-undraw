
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ToTheStars from '../src/ToTheStars';

export default {
  title: 'ToTheStars',
  component: ToTheStars,
};

export const Primary = () => <ToTheStars color="primary" />;
export const Secondary = () => <ToTheStars color="secondary" />;
export const Color = () => <ToTheStars color={color('color', '#00FF00')} />;
    