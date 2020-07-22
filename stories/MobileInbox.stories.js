
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileInbox from '../src/MobileInbox';

export default {
  title: 'MobileInbox',
  component: MobileInbox,
};

export const Primary = () => <MobileInbox color="primary" />;
export const Secondary = () => <MobileInbox color="secondary" />;
export const Color = () => <MobileInbox color={color('color', '#00FF00')} />;
    