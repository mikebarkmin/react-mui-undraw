
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AudioConversation from '../src/AudioConversation';

export default {
  title: 'AudioConversation',
  component: AudioConversation,
};

export const Primary = () => <AudioConversation color="primary" />;
export const Secondary = () => <AudioConversation color="secondary" />;
export const Color = () => <AudioConversation color={color('color', '#00FF00')} />;
    