export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      title: "Intern?",
      name: "intern",
      type: "boolean",
    },
    {
      name: "start_date",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "DD-MMM-YYYY",
      },
    },
    {
      name: "end_date",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "DD-MMM-YYYY",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ name: "data", title: "Description", type: "text" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
