
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileMarketing from '../src/MobileMarketing';

export default {
  title: 'MobileMarketing',
  component: MobileMarketing,
};

export const Primary = () => <MobileMarketing color="primary" />;
export const Secondary = () => <MobileMarketing color="secondary" />;
export const Color = () => <MobileMarketing color={color('color', '#00FF00')} />;
    