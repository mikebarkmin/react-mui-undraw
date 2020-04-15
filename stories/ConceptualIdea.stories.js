
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ConceptualIdea from '../src/ConceptualIdea';

export default {
  title: 'ConceptualIdea',
  component: ConceptualIdea,
};

export const Primary = () => <ConceptualIdea color="primary" />;
export const Secondary = () => <ConceptualIdea color="secondary" />;
export const Color = () => <ConceptualIdea color={color('color', '#00FF00')} />;
    