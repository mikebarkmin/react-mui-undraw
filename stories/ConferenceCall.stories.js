
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ConferenceCall from '../src/ConferenceCall';

export default {
  title: 'ConferenceCall',
  component: ConferenceCall,
};

export const Primary = () => <ConferenceCall color="primary" />;
export const Secondary = () => <ConferenceCall color="secondary" />;
export const Color = () => <ConferenceCall color={color('color', '#00FF00')} />;
    