
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ExperienceDesign from '../src/ExperienceDesign';

export default {
  title: 'ExperienceDesign',
  component: ExperienceDesign,
};

export const Primary = () => <ExperienceDesign color="primary" />;
export const Secondary = () => <ExperienceDesign color="secondary" />;
export const Color = () => <ExperienceDesign color={color('color', '#00FF00')} />;
    