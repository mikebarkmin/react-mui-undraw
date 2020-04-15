
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Conversation from '../src/Conversation';

export default {
  title: 'Conversation',
  component: Conversation,
};

export const Primary = () => <Conversation color="primary" />;
export const Secondary = () => <Conversation color="secondary" />;
export const Color = () => <Conversation color={color('color', '#00FF00')} />;
    