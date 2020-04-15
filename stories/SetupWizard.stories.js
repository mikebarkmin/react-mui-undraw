
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SetupWizard from '../src/SetupWizard';

export default {
  title: 'SetupWizard',
  component: SetupWizard,
};

export const Primary = () => <SetupWizard color="primary" />;
export const Secondary = () => <SetupWizard color="secondary" />;
export const Color = () => <SetupWizard color={color('color', '#00FF00')} />;
    