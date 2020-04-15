
import React from 'react';
import { color } from '@storybook/addon-knobs';
import XmasSnowman from '../src/XmasSnowman';

export default {
  title: 'XmasSnowman',
  component: XmasSnowman,
};

export const Primary = () => <XmasSnowman color="primary" />;
export const Secondary = () => <XmasSnowman color="secondary" />;
export const Color = () => <XmasSnowman color={color('color', '#00FF00')} />;
    