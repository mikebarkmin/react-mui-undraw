
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Editable from '../src/Editable';

export default {
  title: 'Editable',
  component: Editable,
};

export const Primary = () => <Editable color="primary" />;
export const Secondary = () => <Editable color="secondary" />;
export const Color = () => <Editable color={color('color', '#00FF00')} />;
    