
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Onboarding from '../src/Onboarding';

export default {
  title: 'Onboarding',
  component: Onboarding,
};

export const Primary = () => <Onboarding color="primary" />;
export const Secondary = () => <Onboarding color="secondary" />;
export const Color = () => <Onboarding color={color('color', '#00FF00')} />;
    