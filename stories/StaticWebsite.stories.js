
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StaticWebsite from '../src/StaticWebsite';

export default {
  title: 'StaticWebsite',
  component: StaticWebsite,
};

export const Primary = () => <StaticWebsite color="primary" />;
export const Secondary = () => <StaticWebsite color="secondary" />;
export const Color = () => <StaticWebsite color={color('color', '#00FF00')} />;
    