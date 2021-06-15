import React from 'react';
import { ConfigProvider, Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';


import 'antd/dist/antd.css';
import './App.css';

function App() {

  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return (

    <ConfigProvider direction="rtl">
    <Layout style={{ minHeight: '100vh' }}>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">صفحه اصلی</Menu.Item>
        <Menu.Item key="2">درباره ما</Menu.Item>
        <Menu.Item key="3">تماس باما</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="منو شماره یک">
            <Menu.Item key="1">زیر منو ۱</Menu.Item>
            <Menu.Item key="2">زیر منو ۲</Menu.Item>
            <Menu.Item key="3">زیر منو ۳</Menu.Item>
            <Menu.Item key="4">زیر منو ۴</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="منو شماره دو">
            <Menu.Item key="5">زیر منو ۵</Menu.Item>
            <Menu.Item key="6">زیر منو ۶</Menu.Item>
            <Menu.Item key="7">زیر منو ۷</Menu.Item>
            <Menu.Item key="8">زیر منو ۸</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="منو شماره سه">
            <Menu.Item key="9">زیر منو ۹</Menu.Item>
            <Menu.Item key="10">زیر منو ۱۰</Menu.Item>
            <Menu.Item key="11">زیر منو ۱۱</Menu.Item>
            <Menu.Item key="12">زیر منو ۱۲</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>صفحه اصلی</Breadcrumb.Item>
          <Breadcrumb.Item>لیست</Breadcrumb.Item>
          <Breadcrumb.Item>اپلیکیشن</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          محتوایی یافت نشد.
        </Content>
      </Layout>
    </Layout>
  </Layout>
    </ConfigProvider>

  );
}

export default App;
