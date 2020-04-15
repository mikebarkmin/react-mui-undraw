
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BodyText from '../src/BodyText';

export default {
  title: 'BodyText',
  component: BodyText,
};

export const Primary = () => <BodyText color="primary" />;
export const Secondary = () => <BodyText color="secondary" />;
export const Color = () => <BodyText color={color('color', '#00FF00')} />;
    