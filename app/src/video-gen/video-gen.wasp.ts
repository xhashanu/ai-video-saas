import { action, page, query, route, type Spec } from "@wasp.sh/spec";

import { DashboardPage } from "./DashboardPage" with { type: "ref" };
import { CreateTextStoryPage } from "./CreateTextStoryPage" with { type: "ref" };

import {
  generateScript,
  createVideoProject,
  getVideoProjects,
} from "./operations" with { type: "ref" };

export const videoGenSpec: Spec = [
  route("DashboardRoute", "/dashboard", page(DashboardPage, { authRequired: true })),
  route("CreateTextStoryRoute", "/create/text-story", page(CreateTextStoryPage, { authRequired: true })),

  query(getVideoProjects, { entities: ["User", "VideoProject"] }),
  action(generateScript, { entities: ["User"] }),
  action(createVideoProject, { entities: ["User", "VideoProject"] }),
];
