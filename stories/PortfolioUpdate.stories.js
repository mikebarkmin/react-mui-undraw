
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PortfolioUpdate from '../src/PortfolioUpdate';

export default {
  title: 'PortfolioUpdate',
  component: PortfolioUpdate,
};

export const Primary = () => <PortfolioUpdate color="primary" />;
export const Secondary = () => <PortfolioUpdate color="secondary" />;
export const Color = () => <PortfolioUpdate color={color('color', '#00FF00')} />;
    