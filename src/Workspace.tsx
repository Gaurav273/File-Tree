import { Box } from "@mui/material";
import defaultFiles from "./defaultFiles";
import { FilePane } from "./FilePane/FilePane";

import { WorkspaceProvider } from "./WorkspaceContext";
import { Editor } from "./Editor/Editor";

export const Workspace = () => {
  return (
    <WorkspaceProvider files={defaultFiles}>
      <Box display="flex" height="100%">
        <FilePane />
        <Editor />
      </Box>
    </WorkspaceProvider>
  );
};
