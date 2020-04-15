
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AnonymousFeedback from '../src/AnonymousFeedback';

export default {
  title: 'AnonymousFeedback',
  component: AnonymousFeedback,
};

export const Primary = () => <AnonymousFeedback color="primary" />;
export const Secondary = () => <AnonymousFeedback color="secondary" />;
export const Color = () => <AnonymousFeedback color={color('color', '#00FF00')} />;
    