
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VoiceAssistant from '../src/VoiceAssistant';

export default {
  title: 'VoiceAssistant',
  component: VoiceAssistant,
};

export const Primary = () => <VoiceAssistant color="primary" />;
export const Secondary = () => <VoiceAssistant color="secondary" />;
export const Color = () => <VoiceAssistant color={color('color', '#00FF00')} />;
    