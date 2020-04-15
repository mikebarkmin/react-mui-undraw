
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EatingTogether from '../src/EatingTogether';

export default {
  title: 'EatingTogether',
  component: EatingTogether,
};

export const Primary = () => <EatingTogether color="primary" />;
export const Secondary = () => <EatingTogether color="secondary" />;
export const Color = () => <EatingTogether color={color('color', '#00FF00')} />;
    