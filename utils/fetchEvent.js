export const fetchEvent = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getEvent`, {
    next: { revalidate: 10 },
  });
  const event = await res.json();

  return event;
};
