const getRankColor = (description: string) => {
  if (
    [
      "UEFA Champions League Qualifiers",
      "Promotion - Champions League (Group Stage: )",
    ].includes(description)
  ) {
    return "bg-blue-700";
  } else if (
    [
      "Promotion - Europa League (Group Stage: )",
      "UEFA Europa League Qualifiers",
    ].includes(description)
  ) {
    return "bg-red-500";
  } else if (
    [
      "Promotion - Europa Conference League (Qualification: )",
      "UEFA Conference League Qualifiers",
    ].includes(description)
  ) {
    return "bg-amber-500";
  } else if (description && description.includes("Relegation")) {
    return "bg-red-700";
  } else {
    return "bg-transparent";
  }
};

export default getRankColor;
