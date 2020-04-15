
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileEncryption from '../src/MobileEncryption';

export default {
  title: 'MobileEncryption',
  component: MobileEncryption,
};

export const Primary = () => <MobileEncryption color="primary" />;
export const Secondary = () => <MobileEncryption color="secondary" />;
export const Color = () => <MobileEncryption color={color('color', '#00FF00')} />;
    