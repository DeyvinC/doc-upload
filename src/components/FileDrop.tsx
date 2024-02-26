import React, { useCallback, useState } from 'react';
import { useDropzone} from 'react-dropzone';
import { HiMiniDocumentText } from "react-icons/hi2";

export default function DragAndDrop(){
//
const onDrop = useCallback((acceptedFiles: Array<File>) => {
  const file = new FileReader();

  file.onload = function() {
    setPreview(file.result);
  }

  file.readAsDataURL(acceptedFiles[0])
}, [])

const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop
});

const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
// }
return (
  <div>
    <div style={{display: "flex", alignItems: 'center', flexDirection: "column"}} {...getRootProps()}>
      <input {...getInputProps()} />
      <HiMiniDocumentText size={22} color='#ed8e11' />
      <div style={{display: "flex", flexDirection: "row"}}>
        <p style={{fontSize: 13}}>Drag & Drop Here Or </p>
        <p style={{fontSize: 13, marginLeft: 3, fontWeight: "bold"}}>Browse</p>
      </div>
    </div>
  </div>
)
}
