
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BusinessDeal from '../src/BusinessDeal';

export default {
  title: 'BusinessDeal',
  component: BusinessDeal,
};

export const Primary = () => <BusinessDeal color="primary" />;
export const Secondary = () => <BusinessDeal color="secondary" />;
export const Color = () => <BusinessDeal color={color('color', '#00FF00')} />;
    