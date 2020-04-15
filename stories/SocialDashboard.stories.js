
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SocialDashboard from '../src/SocialDashboard';

export default {
  title: 'SocialDashboard',
  component: SocialDashboard,
};

export const Primary = () => <SocialDashboard color="primary" />;
export const Secondary = () => <SocialDashboard color="secondary" />;
export const Color = () => <SocialDashboard color={color('color', '#00FF00')} />;
    