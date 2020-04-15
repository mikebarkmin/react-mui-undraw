
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AcceptRequest from '../src/AcceptRequest';

export default {
  title: 'AcceptRequest',
  component: AcceptRequest,
};

export const Primary = () => <AcceptRequest color="primary" />;
export const Secondary = () => <AcceptRequest color="secondary" />;
export const Color = () => <AcceptRequest color={color('color', '#00FF00')} />;
    