
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VoiceControl from '../src/VoiceControl';

export default {
  title: 'VoiceControl',
  component: VoiceControl,
};

export const Primary = () => <VoiceControl color="primary" />;
export const Secondary = () => <VoiceControl color="secondary" />;
export const Color = () => <VoiceControl color={color('color', '#00FF00')} />;
    