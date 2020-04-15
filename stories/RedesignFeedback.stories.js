
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RedesignFeedback from '../src/RedesignFeedback';

export default {
  title: 'RedesignFeedback',
  component: RedesignFeedback,
};

export const Primary = () => <RedesignFeedback color="primary" />;
export const Secondary = () => <RedesignFeedback color="secondary" />;
export const Color = () => <RedesignFeedback color={color('color', '#00FF00')} />;
    