export const fetchAboutProfile = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutProfile`,
    { next: { revalidate: 10 } }
  );
  const aboutProfile = await res.json();

  return aboutProfile;
};
