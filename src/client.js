import {createClient} from "@sanity/client";

export const client = createClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: 'topics',
  apiVersion: '2024-09-12',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN
})