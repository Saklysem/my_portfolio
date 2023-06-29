export const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,
    { next: { revalidate: 10 } }
  );
  const experience = await res.json();
  return experience;
};
