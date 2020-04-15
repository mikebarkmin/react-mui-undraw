
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Fingerprint from '../src/Fingerprint';

export default {
  title: 'Fingerprint',
  component: Fingerprint,
};

export const Primary = () => <Fingerprint color="primary" />;
export const Secondary = () => <Fingerprint color="secondary" />;
export const Color = () => <Fingerprint color={color('color', '#00FF00')} />;
    