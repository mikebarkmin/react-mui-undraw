
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WebsiteSetup from '../src/WebsiteSetup';

export default {
  title: 'WebsiteSetup',
  component: WebsiteSetup,
};

export const Primary = () => <WebsiteSetup color="primary" />;
export const Secondary = () => <WebsiteSetup color="secondary" />;
export const Color = () => <WebsiteSetup color={color('color', '#00FF00')} />;
    