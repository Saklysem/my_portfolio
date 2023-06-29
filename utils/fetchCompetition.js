export const fetchCompetition = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCompetition`,
    { next: { revalidate: 10 } }
  );
  const competition = await res.json();

  return competition;
};
