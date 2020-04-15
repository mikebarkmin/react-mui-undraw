
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Agreement from '../src/Agreement';

export default {
  title: 'Agreement',
  component: Agreement,
};

export const Primary = () => <Agreement color="primary" />;
export const Secondary = () => <Agreement color="secondary" />;
export const Color = () => <Agreement color={color('color', '#00FF00')} />;
    