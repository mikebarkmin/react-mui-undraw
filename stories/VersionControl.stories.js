
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VersionControl from '../src/VersionControl';

export default {
  title: 'VersionControl',
  component: VersionControl,
};

export const Primary = () => <VersionControl color="primary" />;
export const Secondary = () => <VersionControl color="secondary" />;
export const Color = () => <VersionControl color={color('color', '#00FF00')} />;
    