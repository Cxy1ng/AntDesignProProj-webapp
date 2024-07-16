import { useIntl } from '@@/exports';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer, ProCard, ProForm } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import {
  Avatar,
  Badge,
  Descriptions,
  DescriptionsProps,
  GetProp,
  Image,
  message,
  Space,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd';
import RcResizeObserver from 'rc-resize-observer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';

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
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const beforeUpload = (file: FileType) => {
  const isImage =
    file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
  if (!isImage) {
    message.error('You can only upload JPG/PNG/GIF file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isImage && isLt2M;
};

const Admin: React.FC = () => {
  const intl = useIntl();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [responsive, setResponsive] = useState(false);
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
          children: (
            <RcResizeObserver
              key="resize-observer"
              onResize={(offset) => {
                setResponsive(offset.width < 596);
              }}
            >
              <ProCard split={'horizontal'} bordered>
                <ProCard
                  title={intl.formatMessage({
                    id: 'pages.account.settings.avatar.current',
                    defaultMessage: 'Current Avatar',
                  })}
                  colSpan="100%"
                >
                  <Space direction="vertical" size={16}>
                    <Space wrap size={16}>
                      <Avatar size={100} icon={<img src={'/girl.gif'} />} />
                      <Avatar size="large" icon={<img src={'/girl.gif'} />} />
                      <Avatar size="small" icon={<img src={'/girl.gif'} />} />
                    </Space>
                  </Space>
                </ProCard>
                <ProCard
                  title={intl.formatMessage({
                    id: 'pages.account.settings.avatar.change',
                    defaultMessage: 'Change Avatar',
                  })}
                  colSpan="100%"
                >
                  <ProForm>
                    <Upload
                      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                      listType="picture-circle"
                      fileList={fileList}
                      beforeUpload={beforeUpload}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <br />
                    {previewImage && (
                      <Image
                        wrapperStyle={{ display: 'none' }}
                        preview={{
                          visible: previewOpen,
                          onVisibleChange: (visible) => setPreviewOpen(visible),
                          afterOpenChange: (visible) => !visible && setPreviewImage(''),
                        }}
                        src={previewImage}
                      />
                    )}
                  </ProForm>
                </ProCard>
              </ProCard>
            </RcResizeObserver>
          ),
        },
        {
          tab: <FormattedMessage id="pages.account.settings.privacy" defaultMessage="Privacy" />,
          key: '3',
          children: (
            <ProCard>
              <ProForm></ProForm>
            </ProCard>
          ),
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
