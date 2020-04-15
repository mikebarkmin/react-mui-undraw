
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RelaxingAtHome from '../src/RelaxingAtHome';

export default {
  title: 'RelaxingAtHome',
  component: RelaxingAtHome,
};

export const Primary = () => <RelaxingAtHome color="primary" />;
export const Secondary = () => <RelaxingAtHome color="secondary" />;
export const Color = () => <RelaxingAtHome color={color('color', '#00FF00')} />;
    