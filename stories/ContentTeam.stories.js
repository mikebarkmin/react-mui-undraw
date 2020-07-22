
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ContentTeam from '../src/ContentTeam';

export default {
  title: 'ContentTeam',
  component: ContentTeam,
};

export const Primary = () => <ContentTeam color="primary" />;
export const Secondary = () => <ContentTeam color="secondary" />;
export const Color = () => <ContentTeam color={color('color', '#00FF00')} />;
    