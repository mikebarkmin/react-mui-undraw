
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PortfolioFeedback from '../src/PortfolioFeedback';

export default {
  title: 'PortfolioFeedback',
  component: PortfolioFeedback,
};

export const Primary = () => <PortfolioFeedback color="primary" />;
export const Secondary = () => <PortfolioFeedback color="secondary" />;
export const Color = () => <PortfolioFeedback color={color('color', '#00FF00')} />;
    