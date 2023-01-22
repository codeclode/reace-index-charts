// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type ChartLink = {
  icon: string;
  label: string;
  iconColor: string;
  color: string;
  link: string;
  children?: Array<ChartLink>;
};

const registerLinks: Array<ChartLink> = [
  {
    icon: "IconHomeBolt",
    label: "首页",
    iconColor: "blue",
    color: "blue",
    link: "",
  },
  {
    icon: "IconChartCandle",
    label: "统计图形",
    iconColor: "pink",
    color: "pink",
    link: "charts",
    children: [
      {
        icon: "IconChartArcs",
        label: "饼图",
        iconColor: "green",
        color: "green",
        link: "arc",
        children: [
          {
            icon: "IconChartArcs3",
            label: "普通饼图",
            iconColor: "#66ccff",
            color: "green",
            link: "common",
          },
        ],
      },
    ],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ChartLink>>
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(registerLinks);
}
