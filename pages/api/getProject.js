import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
const query = groq`
    *[_type== "project"]
    
`;

export default async function handler(req, res) {
  const project = await sanityClient.fetch(query);
  res.status(200).json({ project });
}
