
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ArtificialIntelligence from '../src/ArtificialIntelligence';

export default {
  title: 'ArtificialIntelligence',
  component: ArtificialIntelligence,
};

export const Primary = () => <ArtificialIntelligence color="primary" />;
export const Secondary = () => <ArtificialIntelligence color="secondary" />;
export const Color = () => <ArtificialIntelligence color={color('color', '#00FF00')} />;
    