
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CreativeProcess from '../src/CreativeProcess';

export default {
  title: 'CreativeProcess',
  component: CreativeProcess,
};

export const Primary = () => <CreativeProcess color="primary" />;
export const Secondary = () => <CreativeProcess color="secondary" />;
export const Color = () => <CreativeProcess color={color('color', '#00FF00')} />;
    