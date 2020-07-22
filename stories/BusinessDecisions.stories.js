
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BusinessDecisions from '../src/BusinessDecisions';

export default {
  title: 'BusinessDecisions',
  component: BusinessDecisions,
};

export const Primary = () => <BusinessDecisions color="primary" />;
export const Secondary = () => <BusinessDecisions color="secondary" />;
export const Color = () => <BusinessDecisions color={color('color', '#00FF00')} />;
    