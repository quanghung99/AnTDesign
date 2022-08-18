import AppstoreOutlined from '@ant-design/icons';
import { MenuCustom } from '@an-tdesign/ui-common';
export function Homepage() {
  const items = [
    {
      label: 'Trang chủ',
      key: 'homepage',
      icon: <AppstoreOutlined />,
      disabled: false,
    },
    {
      label: 'Giới thiệu',
      key: 'introduction',
      icon: <AppstoreOutlined />,
      disabled: false,
    },
    {
      label: 'Dự án',
      key: 'projects',
      icon: <AppstoreOutlined />,
      disabled: false,
    },
    {
      label: 'Bài viết',
      key: 'posts',
      icon: <AppstoreOutlined />,
      disabled: false,
    },
    {
      label: 'Liên hệ',
      key: 'contact',
      icon: <AppstoreOutlined />,
      disabled: false,
    },
  ];
  // return <Menu mode="horizontal" items={items} />;
  return <MenuCustom items={items} mode="horizontal" />;
}

export default Homepage;
