import React from 'react';
import { ProfilePageBanner } from '.';
import { withRouter } from '../../utils/storybook';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Banners/ProfilePageBanner',
  component: ProfilePageBanner,
  decorators: [withRouter]
};

export const renders = () => (
  <ProfilePageBanner
    onFollow={action('onFollow')}
    onUnfollow={action('onUnfollow')}
    username="lifeiscontent"
  />
);

export const canFollow = () => (
  <ProfilePageBanner
    canFollow={{ value: true }}
    onFollow={action('onFollow')}
    onUnfollow={action('onUnfollow')}
    username="lifeiscontent"
  />
);

export const canUnfollow = () => (
  <ProfilePageBanner
    canUnfollow={{ value: true }}
    followersCount={1}
    onFollow={action('onFollow')}
    onUnfollow={action('onUnfollow')}
    username="lifeiscontent"
    viewerIsFollowing
  />
);

export const canUpdate = () => (
  <ProfilePageBanner
    canUpdate={{ value: true }}
    onFollow={action('onFollow')}
    onUnfollow={action('onUnfollow')}
    username="lifeiscontent"
  />
);