
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PhoneCall from '../src/PhoneCall';

export default {
  title: 'PhoneCall',
  component: PhoneCall,
};

export const Primary = () => <PhoneCall color="primary" />;
export const Secondary = () => <PhoneCall color="secondary" />;
export const Color = () => <PhoneCall color={color('color', '#00FF00')} />;
    