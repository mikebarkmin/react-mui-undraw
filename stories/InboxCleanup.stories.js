
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InboxCleanup from '../src/InboxCleanup';

export default {
  title: 'InboxCleanup',
  component: InboxCleanup,
};

export const Primary = () => <InboxCleanup color="primary" />;
export const Secondary = () => <InboxCleanup color="secondary" />;
export const Color = () => <InboxCleanup color={color('color', '#00FF00')} />;
    