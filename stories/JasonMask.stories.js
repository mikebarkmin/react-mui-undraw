
import React from 'react';
import { color } from '@storybook/addon-knobs';
import JasonMask from '../src/JasonMask';

export default {
  title: 'JasonMask',
  component: JasonMask,
};

export const Primary = () => <JasonMask color="primary" />;
export const Secondary = () => <JasonMask color="secondary" />;
export const Color = () => <JasonMask color={color('color', '#00FF00')} />;
    