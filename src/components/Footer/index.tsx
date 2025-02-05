import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { theme } from 'antd';
import React from 'react';

const Footer: React.FC = () => {
  const { useToken } = theme;

  const { token } = useToken();
  return (
    <DefaultFooter
      style={{
        backgroundColor: token.colorBgContainer,
        color: token.colorTextSecondary,
      }}
      links={[
        {
          key: 'Microworld Official',
          title: 'Microworld Official',
          href: 'https://github.com/Cxy1ng/AntDesignProProj-webapp',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/',
          blankTarget: true,
        },
        {
          key: 'Cxy1ng',
          title: 'Cxy1ng',
          href: 'https://github.com/Cxy1ng',
          blankTarget: true,
        },
      ]}
      copyright={`2024 Microworld, Inc. All rights reserved. `}
    />
  );
};

export default Footer;
