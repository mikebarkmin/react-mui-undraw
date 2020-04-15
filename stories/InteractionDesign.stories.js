
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InteractionDesign from '../src/InteractionDesign';

export default {
  title: 'InteractionDesign',
  component: InteractionDesign,
};

export const Primary = () => <InteractionDesign color="primary" />;
export const Secondary = () => <InteractionDesign color="secondary" />;
export const Color = () => <InteractionDesign color={color('color', '#00FF00')} />;
    