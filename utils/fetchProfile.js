export const fetchProfile = async () => {
  const res = await fetch("https://api.github.com/users/Saklysem", {
    next: { revalidate: 10 },
  
  });

  const profile = await res.json();

  return profile;
};
