import { PageContainer } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import type { DescriptionsProps } from 'antd';
import { Avatar, Badge, Descriptions } from 'antd';
import React from 'react';
const items: DescriptionsProps['items'] = [
  {
    label: <FormattedMessage id="pages.account.settings.profile.avatar" defaultMessage="Avatar" />,
    children: (
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<img src={'/girl.gif'} />}
      />
    ),
  },
  {
    label: (
      <FormattedMessage id="pages.account.settings.profile.username" defaultMessage="Username" />
    ),
    children: 'Cxy1ng',
  },
  {
    label: (
      <FormattedMessage id="pages.account.settings.profile.nickname" defaultMessage="Nickname" />
    ),
    children: 'Cxy1ng Asiimov',
  },
  {
    label: <FormattedMessage id="pages.account.settings.profile.email" defaultMessage="Email" />,
    children: 'cxy1ngmw@outlook.com',
  },
  {
    label: (
      <FormattedMessage
        id="pages.account.settings.profile.regdate"
        defaultMessage="Register Date"
      />
    ),
    children: '2024-6-30 9:30:27 AM GMT +8:00',
  },
  {
    label: (
      <FormattedMessage id="pages.account.settings.profile.lstlogin" defaultMessage="Last Login" />
    ),
    span: { xl: 2, xxl: 2 },
    children: '2024-7-11 10:10:35 AM GMT +8:00',
  },
  {
    label: <FormattedMessage id="pages.account.settings.profile.status" defaultMessage="Status" />,
    span: { xl: 2, xxl: 2 },
    children: <Badge status="success" text="Playing Minecraft JE" />,
  },
  {
    label: (
      <FormattedMessage
        id="pages.account.settings.profile.svplay"
        defaultMessage="Server Playing"
      />
    ),
    span: { xl: 2, xxl: 2 },
    children: 'MW Minecraft Building Server',
  },
  {
    label: (
      <FormattedMessage
        id="pages.account.settings.profile.svplayed"
        defaultMessage="Server Played"
      />
    ),
    span: { xl: 2, xxl: 2 },
    children: (
      <>
        MW Minecraft Building Server
        <br />
        MW Minecraft Modding Server
        <br />
        MW Unturned DS
      </>
    ),
  },
  {
    label: (
      <FormattedMessage id="pages.account.settings.profile.desc" defaultMessage="Description" />
    ),
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        Owner of Microworld.Inc
        <br />
        Administrator of 3 game servers
      </>
    ),
  },
];

const Admin: React.FC = () => {
  return (
    <PageContainer
      tabList={[
        {
          tab: <FormattedMessage id="pages.account.settings.profile" defaultMessage="Profile" />,
          key: '1',
          children: (
            <Descriptions
              bordered
              column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
              items={items}
            />
          ),
        },
        {
          tab: <FormattedMessage id="pages.account.settings.avatar" defaultMessage="Avatar" />,
          key: '2',
        },
        {
          tab: <FormattedMessage id="pages.account.settings.privacy" defaultMessage="Privacy" />,
          key: '3',
        },
        {
          tab: <FormattedMessage id="pages.account.settings.password" defaultMessage="Password" />,
          key: '4',
        },
        {
          tab: (
            <FormattedMessage id="pages.account.settings.other" defaultMessage="Other Settings" />
          ),
          key: '5',
        },
      ]}
    />
  );
};

export default Admin;
