"use client";
import React, { useState, useRef, useCallback } from "react";
import { BsFileEarmarkPlus } from "react-icons/bs";
import DeleteAgent from "../../[agentId]/components/DeleteAgent";

interface FileWithPreview extends File {
  id: string;
}

const FileUploader = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getTotalFileSize = (): string => {
    const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
    return formatFileSize(totalBytes);
  };

  const processFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    const newFiles: FileWithPreview[] = [];
    const maxSize = 50 * 1024 * 1024; // 50MB in bytes

    Array.from(fileList).forEach((file) => {
      if (file.size <= maxSize) {
        const fileWithId: FileWithPreview = Object.assign(file, {
          id: `${file.name}-${Date.now()}-${Math.random()}`,
        });
        newFiles.push(fileWithId);
      } else {
        alert(`File "${file.name}" is too large. Maximum size is 50MB.`);
      }
    });

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget === e.target) {
      setIsDragOver(false);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const droppedFiles = e.dataTransfer.files;
    processFiles(droppedFiles);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files);
    // Reset input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (fileId: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full   cursor-default">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 overflow-hidden cursor-pointer  ${
          isDragOver
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          accept="*/*"
        />

        <div className="flex flex-col items-center space-y-4 ">
          <div>
            <p className="text-lg font-medium text-gray-900">
              Drop your files here or{" "}
              <span className="text-blue-600 hover:text-blue-700 ">browse</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">Maximum size: 50MB</p>
          </div>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Uploaded Files ({files.length})
            </h3>
            <div className="text-sm text-gray-600">
              Total size:{" "}
              <span className="font-medium">{getTotalFileSize()}</span>
            </div>
          </div>

          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3  rounded-lg border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <BsFileEarmarkPlus className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(file.id);
                  }}
                >
                  <DeleteAgent />
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-6">
            <button
              onClick={() => console.log("Upload files:", files)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Upload Files
            </button>
            <button
              onClick={() => setFiles([])}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
