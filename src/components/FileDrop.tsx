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

/**
 * handleOnSubmit
 */

// async function handleOnSubmit(e: React.SyntheticEvent) {
//   e.preventDefault();

//   if ( typeof acceptedFiles[0] === 'undefined' ) return;

//   const formData = new FormData();

//   formData.append('file', acceptedFiles[0]);
//   formData.append('upload_preset', '<Your Upload Preset>');
//   // formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

//   // const results = await fetch('https://api.cloudinary.com/v1_1/<Your Cloud Name>/image/upload', {
//   //   method: 'POST',
//   //   body: formData
//   // }).then(r => r.json());

//   // console.log('results', results);
// }
return (
  <div>
    <div style={{display: "flex", alignItems: 'center', flexDirection: "column"}} {...getRootProps()}>
      <input {...getInputProps()} />
      {/* {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      } */}
      <HiMiniDocumentText size={22} color='#ed8e11' />
      <div style={{display: "flex", flexDirection: "row"}}>
        <p style={{fontSize: 13}}>Drag & Drop Here Or </p>
        <p style={{fontSize: 13, marginLeft: 3, fontWeight: "bold"}}>Browse</p>
      </div>
    </div>
    {/* {preview && (
      <p>
        <img src={preview as string} alt="Upload preview" />
      </p>
    )} */}
  </div>
)
}

// DragAndDrop.propTypes = {
//   onUpload: PropTypes.func.isRequired,
// };
