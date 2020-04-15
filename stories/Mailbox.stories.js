
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Mailbox from '../src/Mailbox';

export default {
  title: 'Mailbox',
  component: Mailbox,
};

export const Primary = () => <Mailbox color="primary" />;
export const Secondary = () => <Mailbox color="secondary" />;
export const Color = () => <Mailbox color={color('color', '#00FF00')} />;
    