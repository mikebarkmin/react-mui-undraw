
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Certification from '../src/Certification';

export default {
  title: 'Certification',
  component: Certification,
};

export const Primary = () => <Certification color="primary" />;
export const Secondary = () => <Certification color="secondary" />;
export const Color = () => <Certification color={color('color', '#00FF00')} />;
    