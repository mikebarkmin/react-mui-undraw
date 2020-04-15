
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PredictiveAnalytics from '../src/PredictiveAnalytics';

export default {
  title: 'PredictiveAnalytics',
  component: PredictiveAnalytics,
};

export const Primary = () => <PredictiveAnalytics color="primary" />;
export const Secondary = () => <PredictiveAnalytics color="secondary" />;
export const Color = () => <PredictiveAnalytics color={color('color', '#00FF00')} />;
    