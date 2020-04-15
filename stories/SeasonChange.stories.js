
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SeasonChange from '../src/SeasonChange';

export default {
  title: 'SeasonChange',
  component: SeasonChange,
};

export const Primary = () => <SeasonChange color="primary" />;
export const Secondary = () => <SeasonChange color="secondary" />;
export const Color = () => <SeasonChange color={color('color', '#00FF00')} />;
    