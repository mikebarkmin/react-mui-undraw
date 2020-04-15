
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VoiceInterface from '../src/VoiceInterface';

export default {
  title: 'VoiceInterface',
  component: VoiceInterface,
};

export const Primary = () => <VoiceInterface color="primary" />;
export const Secondary = () => <VoiceInterface color="secondary" />;
export const Color = () => <VoiceInterface color={color('color', '#00FF00')} />;
    