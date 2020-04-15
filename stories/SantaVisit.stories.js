
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SantaVisit from '../src/SantaVisit';

export default {
  title: 'SantaVisit',
  component: SantaVisit,
};

export const Primary = () => <SantaVisit color="primary" />;
export const Secondary = () => <SantaVisit color="secondary" />;
export const Color = () => <SantaVisit color={color('color', '#00FF00')} />;
    