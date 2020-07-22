
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Forms from '../src/Forms';

export default {
  title: 'Forms',
  component: Forms,
};

export const Primary = () => <Forms color="primary" />;
export const Secondary = () => <Forms color="secondary" />;
export const Color = () => <Forms color={color('color', '#00FF00')} />;
    