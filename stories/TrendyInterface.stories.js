
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TrendyInterface from '../src/TrendyInterface';

export default {
  title: 'TrendyInterface',
  component: TrendyInterface,
};

export const Primary = () => <TrendyInterface color="primary" />;
export const Secondary = () => <TrendyInterface color="secondary" />;
export const Color = () => <TrendyInterface color={color('color', '#00FF00')} />;
    