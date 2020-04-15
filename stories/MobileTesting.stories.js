
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileTesting from '../src/MobileTesting';

export default {
  title: 'MobileTesting',
  component: MobileTesting,
};

export const Primary = () => <MobileTesting color="primary" />;
export const Secondary = () => <MobileTesting color="secondary" />;
export const Color = () => <MobileTesting color={color('color', '#00FF00')} />;
    