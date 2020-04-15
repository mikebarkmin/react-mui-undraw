
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Questions from '../src/Questions';

export default {
  title: 'Questions',
  component: Questions,
};

export const Primary = () => <Questions color="primary" />;
export const Secondary = () => <Questions color="secondary" />;
export const Color = () => <Questions color={color('color', '#00FF00')} />;
    