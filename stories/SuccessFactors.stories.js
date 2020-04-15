
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SuccessFactors from '../src/SuccessFactors';

export default {
  title: 'SuccessFactors',
  component: SuccessFactors,
};

export const Primary = () => <SuccessFactors color="primary" />;
export const Secondary = () => <SuccessFactors color="secondary" />;
export const Color = () => <SuccessFactors color={color('color', '#00FF00')} />;
    