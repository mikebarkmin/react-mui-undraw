
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AppInstallation from '../src/AppInstallation';

export default {
  title: 'AppInstallation',
  component: AppInstallation,
};

export const Primary = () => <AppInstallation color="primary" />;
export const Secondary = () => <AppInstallation color="secondary" />;
export const Color = () => <AppInstallation color={color('color', '#00FF00')} />;
    