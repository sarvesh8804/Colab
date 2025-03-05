import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { toast } from "sonner";

// A simple version object to represent each version.
interface Version {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface DocumentVersioningProps {
  documentId: string;
}

export const DocumentVersioning = ({ documentId }: DocumentVersioningProps) => {
  const [versions, setVersions] = useState<Version[]>([]);
  const [selectedVersion, setSelectedVersion] = useState<Version | null>(null);
  const [isRestoring, setIsRestoring] = useState(false);

  // Fetch versions of the document
  const { data: fetchedVersions, error } = useQuery(api.documents.getVersions, { id: documentId });

  // Use the `getVersions` query to update the versions state when data is fetched
  useEffect(() => {
    if (fetchedVersions) {
      setVersions(fetchedVersions);
    }
  }, [fetchedVersions]);

  // Restore the selected version
  const restoreVersion = useMutation(api.documents.restoreVersion);

  const handleRestore = async (version: Version) => {
    setIsRestoring(true);
    try {
      await restoreVersion({ documentId, versionId: version.id });
      toast.success("Version restored successfully");
      setSelectedVersion(version); // Update the selected version after restoring
    } catch (err) {
      toast.error("Error restoring version");
    } finally {
      setIsRestoring(false);
    }
  };

  if (error) {
    return <div>Error loading document versions.</div>;
  }

  return (
    <div>
      <h3>Document Versions</h3>
      <ul>
        {versions.map((version) => (
          <li key={version.id} className="version-item">
            <div>
              <strong>{version.title}</strong>
              <p>{version.createdAt}</p>
              <button
                onClick={() => setSelectedVersion(version)}
                className="preview-button"
              >
                Preview
              </button>
              <button
                onClick={() => handleRestore(version)}
                disabled={isRestoring}
                className="restore-button"
              >
                {isRestoring ? "Restoring..." : "Restore"}
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedVersion && (
        <div>
          <h4>Preview Version: {selectedVersion.title}</h4>
          <div>{selectedVersion.content}</div>
        </div>
      )}
    </div>
  );
};
