import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = 'henry Xu';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'henry',
          title: '个人博客',
          href: 'http://henry.top',
          blankTarget: true,
        },
        {
          key: 'henry\'s article',
          title: '社区文章',
          href: 'https://www.code-nav.cn/user/1621433932878725122',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 模板源码
            </>
          ),
          href: 'https://github.com/liyupi',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
