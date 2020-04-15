
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TutorialVideo from '../src/TutorialVideo';

export default {
  title: 'TutorialVideo',
  component: TutorialVideo,
};

export const Primary = () => <TutorialVideo color="primary" />;
export const Secondary = () => <TutorialVideo color="secondary" />;
export const Color = () => <TutorialVideo color={color('color', '#00FF00')} />;
    