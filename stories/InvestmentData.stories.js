
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InvestmentData from '../src/InvestmentData';

export default {
  title: 'InvestmentData',
  component: InvestmentData,
};

export const Primary = () => <InvestmentData color="primary" />;
export const Secondary = () => <InvestmentData color="secondary" />;
export const Color = () => <InvestmentData color={color('color', '#00FF00')} />;
    