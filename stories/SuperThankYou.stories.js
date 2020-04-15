
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SuperThankYou from '../src/SuperThankYou';

export default {
  title: 'SuperThankYou',
  component: SuperThankYou,
};

export const Primary = () => <SuperThankYou color="primary" />;
export const Secondary = () => <SuperThankYou color="secondary" />;
export const Color = () => <SuperThankYou color={color('color', '#00FF00')} />;
    