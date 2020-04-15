
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SpeechToText from '../src/SpeechToText';

export default {
  title: 'SpeechToText',
  component: SpeechToText,
};

export const Primary = () => <SpeechToText color="primary" />;
export const Secondary = () => <SpeechToText color="secondary" />;
export const Color = () => <SpeechToText color={color('color', '#00FF00')} />;
    