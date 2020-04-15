
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CupOfTea from '../src/CupOfTea';

export default {
  title: 'CupOfTea',
  component: CupOfTea,
};

export const Primary = () => <CupOfTea color="primary" />;
export const Secondary = () => <CupOfTea color="secondary" />;
export const Color = () => <CupOfTea color={color('color', '#00FF00')} />;
    