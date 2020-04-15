
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FinancialData from '../src/FinancialData';

export default {
  title: 'FinancialData',
  component: FinancialData,
};

export const Primary = () => <FinancialData color="primary" />;
export const Secondary = () => <FinancialData color="secondary" />;
export const Color = () => <FinancialData color={color('color', '#00FF00')} />;
    