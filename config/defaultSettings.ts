import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'realDark',
  // 拂晓蓝
  colorPrimary: '#52C41A',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Microworld 管理后台',
  pwa: true,
  logo: '/logo.png',
  iconfontUrl: '',
  splitMenus: false,
  siderMenuType: 'sub',
  token: {},
};

export default Settings;
