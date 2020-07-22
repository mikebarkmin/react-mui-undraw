
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EmptyStreet from '../src/EmptyStreet';

export default {
  title: 'EmptyStreet',
  component: EmptyStreet,
};

export const Primary = () => <EmptyStreet color="primary" />;
export const Secondary = () => <EmptyStreet color="secondary" />;
export const Color = () => <EmptyStreet color={color('color', '#00FF00')} />;
    