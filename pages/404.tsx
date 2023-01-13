import Layout from "@/components/layout";
import { Result } from "antd";

export default function NotFount() {
  return (
    <Layout>
      <Result
        status="warning"
        title="404"
        subTitle="我不知道你是怎么进来的，但是请你自重😡"
        style={{ backgroundColor: "transparent" }}
      />
    </Layout>
  );
}
