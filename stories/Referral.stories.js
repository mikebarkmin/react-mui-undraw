
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Referral from '../src/Referral';

export default {
  title: 'Referral',
  component: Referral,
};

export const Primary = () => <Referral color="primary" />;
export const Secondary = () => <Referral color="secondary" />;
export const Color = () => <Referral color={color('color', '#00FF00')} />;
    