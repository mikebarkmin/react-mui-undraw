
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SiteStats from '../src/SiteStats';

export default {
  title: 'SiteStats',
  component: SiteStats,
};

export const Primary = () => <SiteStats color="primary" />;
export const Secondary = () => <SiteStats color="secondary" />;
export const Color = () => <SiteStats color={color('color', '#00FF00')} />;
    