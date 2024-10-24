import React from "react";
import { Box, Typography } from "@mui/material";

import { buildFileTree } from "../utils/fileUtils";
import { useWorkspaceContext } from "../WorkspaceContext";
import { Folder } from "./Folder";

export const FilePane = () => {
  const { files } = useWorkspaceContext();
  const fileTree = buildFileTree(files);

  return (
    <Box>
      <Box p={1}>
        <Typography variant="h6" mr={14}>
          Files
        </Typography>
      </Box>
      <Box>
        <Folder name="root" content={fileTree} parentPath="" />
      </Box>
    </Box>
  );
};
