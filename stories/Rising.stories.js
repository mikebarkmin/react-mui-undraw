
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Rising from '../src/Rising';

export default {
  title: 'Rising',
  component: Rising,
};

export const Primary = () => <Rising color="primary" />;
export const Secondary = () => <Rising color="secondary" />;
export const Color = () => <Rising color={color('color', '#00FF00')} />;
    