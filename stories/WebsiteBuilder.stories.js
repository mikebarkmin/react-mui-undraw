
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WebsiteBuilder from '../src/WebsiteBuilder';

export default {
  title: 'WebsiteBuilder',
  component: WebsiteBuilder,
};

export const Primary = () => <WebsiteBuilder color="primary" />;
export const Secondary = () => <WebsiteBuilder color="secondary" />;
export const Color = () => <WebsiteBuilder color={color('color', '#00FF00')} />;
    