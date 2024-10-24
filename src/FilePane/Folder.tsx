import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import { FileRow } from "./components/FileRow";

interface FolderProps {
  name: string;
  content: any;
  parentPath?: string;
}

export const Folder = ({ name, content, parentPath = "" }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = `${parentPath}/${name}`;
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box pl={2}>
      <Box display="flex" alignItems="center" onClick={handleToggle}>
        <div style={{ cursor: "pointer" }}>{isOpen ? "▼" : "▶"}</div>
        <Typography>{name}</Typography>
      </Box>
      {isOpen && (
        <Box>
          {content
            ? Object.entries(content).map(([key, value]) => {
                if (value === "file") {
                  return (
                    <FileRow key={key} file={key} currentPath={currentPath} />
                  );
                } else {
                  return (
                    <Folder
                      key={currentPath + "/" + key}
                      name={key}
                      content={value}
                      parentPath={currentPath}
                    />
                  );
                }
              })
            : null}
        </Box>
      )}
    </Box>
  );
};
