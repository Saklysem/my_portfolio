import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
const query = groq`
    *[_type== "competition"]
    
`;

export default async function handler(req, res) {
  const competition = await sanityClient.fetch(query);
  res.status(200).json({ competition });
}
