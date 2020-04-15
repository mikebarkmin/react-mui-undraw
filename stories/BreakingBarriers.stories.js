
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BreakingBarriers from '../src/BreakingBarriers';

export default {
  title: 'BreakingBarriers',
  component: BreakingBarriers,
};

export const Primary = () => <BreakingBarriers color="primary" />;
export const Secondary = () => <BreakingBarriers color="secondary" />;
export const Color = () => <BreakingBarriers color={color('color', '#00FF00')} />;
    