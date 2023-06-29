export const fetchProject = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProject`,
    { next: { revalidate: 10 } }
  );
  const project = await res.json();

  return project;
};
