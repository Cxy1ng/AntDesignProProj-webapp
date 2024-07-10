import { PageContainer, ProCard } from '@ant-design/pro-components';
import React from 'react';

const Admin: React.FC = () => {
  return (
    <PageContainer
      tabList={[
        {
          tab: 'User Profile',
          key: '1',
          children: <ProCard></ProCard>,
        },
        {
          tab: 'Avatar',
          key: '2',
        },
        {
          tab: 'Privacy',
          key: '3',
        },
        {
          tab: 'Password',
          key: '4',
        },
        {
          tab: 'Other Settings',
          key: '5',
        },
      ]}
    ></PageContainer>
  );
};

export default Admin;
