import { Box, Typography } from "@mui/material";

import { FileIcon } from "./FileIcon";
import { useWorkspaceContext } from "../../WorkspaceContext";

interface IFileRowProps {
  file: string;
  currentPath: string;
}

export const FileRow = ({ file, currentPath }: IFileRowProps) => {
  const { activeFile, activateFile } = useWorkspaceContext();
  const sanitizedPath = currentPath.replace("/root/", "");

  const finalPath = sanitizedPath + `/${file}`;

  return (
    <Box
      display="flex"
      height="1.5rem"
      flexDirection="row"
      alignItems="center"
      key={file}
      px={1}
      sx={{
        cursor: "pointer",
        background: activeFile?.path === file ? "#DADADA" : "inherit",
        "&:hover": {
          background: "#E6E6E6",
        },
      }}
      onClick={() => activateFile(finalPath)}
    >
      <Box width="1.5rem">
        <FileIcon fileName={file} />
      </Box>
      <Typography variant="body2">{file}</Typography>
    </Box>
  );
};
