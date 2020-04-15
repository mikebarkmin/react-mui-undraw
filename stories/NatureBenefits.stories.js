
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NatureBenefits from '../src/NatureBenefits';

export default {
  title: 'NatureBenefits',
  component: NatureBenefits,
};

export const Primary = () => <NatureBenefits color="primary" />;
export const Secondary = () => <NatureBenefits color="secondary" />;
export const Color = () => <NatureBenefits color={color('color', '#00FF00')} />;
    