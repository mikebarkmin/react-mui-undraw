
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EmailCampaign from '../src/EmailCampaign';

export default {
  title: 'EmailCampaign',
  component: EmailCampaign,
};

export const Primary = () => <EmailCampaign color="primary" />;
export const Secondary = () => <EmailCampaign color="secondary" />;
export const Color = () => <EmailCampaign color={color('color', '#00FF00')} />;
    