
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PrivacyProtection from '../src/PrivacyProtection';

export default {
  title: 'PrivacyProtection',
  component: PrivacyProtection,
};

export const Primary = () => <PrivacyProtection color="primary" />;
export const Secondary = () => <PrivacyProtection color="secondary" />;
export const Color = () => <PrivacyProtection color={color('color', '#00FF00')} />;
    