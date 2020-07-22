
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BusinessChat from '../src/BusinessChat';

export default {
  title: 'BusinessChat',
  component: BusinessChat,
};

export const Primary = () => <BusinessChat color="primary" />;
export const Secondary = () => <BusinessChat color="secondary" />;
export const Color = () => <BusinessChat color={color('color', '#00FF00')} />;
    