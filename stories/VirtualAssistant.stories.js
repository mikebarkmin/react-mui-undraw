
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VirtualAssistant from '../src/VirtualAssistant';

export default {
  title: 'VirtualAssistant',
  component: VirtualAssistant,
};

export const Primary = () => <VirtualAssistant color="primary" />;
export const Secondary = () => <VirtualAssistant color="secondary" />;
export const Color = () => <VirtualAssistant color={color('color', '#00FF00')} />;
    