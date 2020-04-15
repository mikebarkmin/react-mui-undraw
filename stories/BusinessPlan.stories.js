
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BusinessPlan from '../src/BusinessPlan';

export default {
  title: 'BusinessPlan',
  component: BusinessPlan,
};

export const Primary = () => <BusinessPlan color="primary" />;
export const Secondary = () => <BusinessPlan color="secondary" />;
export const Color = () => <BusinessPlan color={color('color', '#00FF00')} />;
    