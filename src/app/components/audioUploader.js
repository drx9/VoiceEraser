import { useState } from 'react';
import { Button } from '@mantine/core';

export function AudioUploader() {
  const [audioFile, setAudioFile] = useState(null); // Removed TypeScript type annotation

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(file);
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <Button onClick={() => console.log(audioFile)}>Upload</Button>
    </div>
  );
}
