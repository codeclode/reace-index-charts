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
    icon: "IconChartArcs",
    label: "饼图",
    iconColor: "green",
    color: "green",
    link: "arc",
    children: [
      {
        icon: "IconChartArcs3",
        label: "普通饼图",
        iconColor: "green",
        color: "green",
        link: "arc",
      },
    ],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ChartLink>>
) {
  res.status(200).json(registerLinks);
}
