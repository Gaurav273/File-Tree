// Define a type for the input parameter
interface File {
  path: string;
}

// Define the type for the resulting file tree structure
type FileTree = { [key: string]: string | FileTree };

// The function to build the file tree
export const buildFileTree = (files: File[]): FileTree => {
  const root: FileTree = {};

  files.forEach(({ path }) => {
    const parts = path.split("/");
    let current = root;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        if (!current[part]) {
          current[part] = "file"; // Marking as a file
        }
      } else {
        if (!current[part]) {
          current[part] = {}; // Creating a new directory
        }
        current = current[part] as FileTree; // Type assertion for TypeScript
      }
    });
  });

  return root;
};
