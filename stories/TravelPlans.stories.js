
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TravelPlans from '../src/TravelPlans';

export default {
  title: 'TravelPlans',
  component: TravelPlans,
};

export const Primary = () => <TravelPlans color="primary" />;
export const Secondary = () => <TravelPlans color="secondary" />;
export const Color = () => <TravelPlans color={color('color', '#00FF00')} />;
    