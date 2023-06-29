import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
const query = groq`
    *[_type== "aboutProfile"]
    
`;

export default async function handler(req, res) {
  const aboutProfile = await sanityClient.fetch(query);
  res.status(200).json({ aboutProfile });
}
