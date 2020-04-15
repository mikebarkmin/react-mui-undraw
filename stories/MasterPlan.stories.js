
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MasterPlan from '../src/MasterPlan';

export default {
  title: 'MasterPlan',
  component: MasterPlan,
};

export const Primary = () => <MasterPlan color="primary" />;
export const Secondary = () => <MasterPlan color="secondary" />;
export const Color = () => <MasterPlan color={color('color', '#00FF00')} />;
    