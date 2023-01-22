import { Anchor, FloatButton, Layout } from "antd";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import { ReactNode } from "react";
import styles from "./layout.module.css";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import { RedoOutlined, GithubOutlined, PlusOutlined } from "@ant-design/icons";
const { Header, Footer, Content, Sider } = Layout;

type prop = {
  children: ReactNode;
  icon?: ReactNode;
  title: string;
  description: string;
  lastUpdate: Date;
  anchorItems: AnchorLinkItemProps[];
};

function Fab(prop: { source: string }) {
  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24 }}
        icon={<PlusOutlined />}
      >
        <FloatButton
          tooltip={"刷新本页"}
          icon={<RedoOutlined />}
          onClick={() => {
            window.history.go(0);
          }}
        />
        <FloatButton
          tooltip={"查看本页代码"}
          onClick={() => {
            window.open(prop.source, "__blank");
          }}
          icon={<GithubOutlined />}
        />
        <FloatButton.BackTop />
      </FloatButton.Group>
    </>
  );
}

export default function ChartsLayout({
  children,
  title,
  description,
  icon,
  lastUpdate,
  anchorItems,
}: prop) {
  return (
    <Layout className={styles.outter} style={{ background: "transparent" }}>
      <Header className={styles.header}>
        <Title level={2}>
          {icon}
          {title}
        </Title>
      </Header>
      <Layout
        className={styles.mainContainer}
        style={{ background: "transparent" }}
      >
        <Content className={styles.content}>
          <Paragraph type="secondary">{description}</Paragraph>
          <div style={{ fontSize: "1.2em", textIndent: "2em" }}>{children}</div>
        </Content>
        <Sider breakpoint="md" collapsedWidth={0} className={styles.Sider}>
          <Anchor items={anchorItems}></Anchor>
        </Sider>
        <Fab source="https://www.baidu.com"></Fab>
      </Layout>
      <Footer className={styles.footer} style={{ background: "transparent" }}>
        {lastUpdate ? "last Update:" + lastUpdate.toLocaleDateString() : ""}
      </Footer>
    </Layout>
  );
}
