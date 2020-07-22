
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CreativeDraft from '../src/CreativeDraft';

export default {
  title: 'CreativeDraft',
  component: CreativeDraft,
};

export const Primary = () => <CreativeDraft color="primary" />;
export const Secondary = () => <CreativeDraft color="secondary" />;
export const Color = () => <CreativeDraft color={color('color', '#00FF00')} />;
    