
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SiteContent from '../src/SiteContent';

export default {
  title: 'SiteContent',
  component: SiteContent,
};

export const Primary = () => <SiteContent color="primary" />;
export const Secondary = () => <SiteContent color="secondary" />;
export const Color = () => <SiteContent color={color('color', '#00FF00')} />;
    