
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MailSent from '../src/MailSent';

export default {
  title: 'MailSent',
  component: MailSent,
};

export const Primary = () => <MailSent color="primary" />;
export const Secondary = () => <MailSent color="secondary" />;
export const Color = () => <MailSent color={color('color', '#00FF00')} />;
    