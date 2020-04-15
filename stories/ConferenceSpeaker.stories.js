
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ConferenceSpeaker from '../src/ConferenceSpeaker';

export default {
  title: 'ConferenceSpeaker',
  component: ConferenceSpeaker,
};

export const Primary = () => <ConferenceSpeaker color="primary" />;
export const Secondary = () => <ConferenceSpeaker color="secondary" />;
export const Color = () => <ConferenceSpeaker color={color('color', '#00FF00')} />;
    