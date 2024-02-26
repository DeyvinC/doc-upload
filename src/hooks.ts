import { useState } from "react";
import axios from "axios";

export const useUpload = (url: string) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  const upload = async (formData: FormData) => {
    //setIsLoading(true);
    await axios.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
            const progress = (progressEvent.loaded / (progressEvent.total ?? 1)) * 50;
            setProgress(progress);
        },
        onDownloadProgress: (progressEvent) => {
            const progress = 50 + (progressEvent.loaded / (progressEvent.total ?? 1)) * 50;
            console.log(progress);
            setProgress(progress);
        },
    });
    setIsSuccess(true)
  };

  return { upload, isSuccess, progress };
};