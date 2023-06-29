import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
const query = groq`
    *[_type== "event" && published == true][0]{...}
    
`;

export default async function handler(req, res) {
  const event = await sanityClient.fetch(query);
  res.status(200).json({ event });
}
