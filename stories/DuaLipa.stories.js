
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DuaLipa from '../src/DuaLipa';

export default {
  title: 'DuaLipa',
  component: DuaLipa,
};

export const Primary = () => <DuaLipa color="primary" />;
export const Secondary = () => <DuaLipa color="secondary" />;
export const Color = () => <DuaLipa color={color('color', '#00FF00')} />;
    