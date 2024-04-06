const titleToId = (title: string) => {
  const id = title.replace(":", "").replace(/\s|\./g, "-").toLowerCase();

  return id;
};

export default titleToId;
