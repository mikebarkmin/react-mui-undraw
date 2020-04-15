
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Certificate from '../src/Certificate';

export default {
  title: 'Certificate',
  component: Certificate,
};

export const Primary = () => <Certificate color="primary" />;
export const Secondary = () => <Certificate color="secondary" />;
export const Color = () => <Certificate color={color('color', '#00FF00')} />;
    