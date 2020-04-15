
import React from 'react';
import { color } from '@storybook/addon-knobs';
import XmasSurprise from '../src/XmasSurprise';

export default {
  title: 'XmasSurprise',
  component: XmasSurprise,
};

export const Primary = () => <XmasSurprise color="primary" />;
export const Secondary = () => <XmasSurprise color="secondary" />;
export const Color = () => <XmasSurprise color={color('color', '#00FF00')} />;
    