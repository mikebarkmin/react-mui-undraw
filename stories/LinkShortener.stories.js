
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LinkShortener from '../src/LinkShortener';

export default {
  title: 'LinkShortener',
  component: LinkShortener,
};

export const Primary = () => <LinkShortener color="primary" />;
export const Secondary = () => <LinkShortener color="secondary" />;
export const Color = () => <LinkShortener color={color('color', '#00FF00')} />;
    