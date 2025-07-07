export const mdOptions = {
  toolbar: [
    "bold",
    "italic",
    "heading",
    "|",
    "quote",
    "unordered-list",
    "ordered-list",
    "|",
    "link",
    "image",
    "table",
    "code",
  ],
  previewClass: ["bg-background", "p-4", "rounded-md"],
  placeholder: "Not içeriğini giriniz...",
} as const;
// normalde ts nesnenin tipini oto olarak algılarken değerlerin tipi üzerinden ilerler yani bizim toolbar'ın tipi string[] olur
// ama as const ifadesini kullanırsak toolbar'ın tipi direkt içindeki değerler olur (["unordered-list","ordered-list"])

export const selectStyles = {
  control: (styles: object) => ({
    ...styles,
    backgroundColor: "bg-card",
    borderColor: "border-primary",
    padding: "5px",
    "&:hover": {
      borderColor: "border-primary",
    },
    border: "1px solid var(--color-border)",
  }),

  input: (styles: object) => ({
    ...styles,
    color: "var(--color-text-primary)",
  }),

  multiValue: (styles: object) => ({
    ...styles,
    backgroundColor: "var(--color-primary)",
    color: "var(--color-text-primary)",
    borderRadius: "10px",
  }),

  multiValueLabel: (styles: object) => ({
    ...styles,
    color: "var(--color-text-primary)",
    fontSize: "16px",
  }),

  multiValueRemove: (styles: object) => ({
    ...styles,
    color: "var(--color-text-primary)",
    fontSize: "16px",
    cursor: "pointer",

    ":hover": {},
  }),

  option: (styles: object) => ({
    ...styles,
    color: "var(--color-text-primary)",
    backgroundColor: "var(--color-background)",
    "&:hover": {
      backgroundColor: "var(--color-primary)",
    },
  }),
};
