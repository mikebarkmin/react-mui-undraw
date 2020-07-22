
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AdvancedCustomization from '../src/AdvancedCustomization';

export default {
  title: 'AdvancedCustomization',
  component: AdvancedCustomization,
};

export const Primary = () => <AdvancedCustomization color="primary" />;
export const Secondary = () => <AdvancedCustomization color="secondary" />;
export const Color = () => <AdvancedCustomization color={color('color', '#00FF00')} />;
    