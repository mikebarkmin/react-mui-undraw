
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PortfolioWebsite from '../src/PortfolioWebsite';

export default {
  title: 'PortfolioWebsite',
  component: PortfolioWebsite,
};

export const Primary = () => <PortfolioWebsite color="primary" />;
export const Secondary = () => <PortfolioWebsite color="secondary" />;
export const Color = () => <PortfolioWebsite color={color('color', '#00FF00')} />;
    