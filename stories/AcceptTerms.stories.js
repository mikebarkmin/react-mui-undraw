
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AcceptTerms from '../src/AcceptTerms';

export default {
  title: 'AcceptTerms',
  component: AcceptTerms,
};

export const Primary = () => <AcceptTerms color="primary" />;
export const Secondary = () => <AcceptTerms color="secondary" />;
export const Color = () => <AcceptTerms color={color('color', '#00FF00')} />;
    