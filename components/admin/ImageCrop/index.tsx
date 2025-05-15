import React, { useRef, useEffect } from 'react';
import Cropper from 'cropperjs';

interface ImageCropProps {
  src: string;
  maxWidth?: number;
  maxHeight?: number;
  onCrop: (croppedImage: Blob) => void;
}

const ImageCrop: React.FC<ImageCropProps> = ({ src, maxWidth = 400, maxHeight = 400, onCrop }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const cropperRef = useRef<Cropper | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      cropperRef.current = new Cropper(imageRef.current, {
        aspectRatio: maxWidth / maxHeight,
        viewMode: 1,
        ready: () => {
          (cropperRef as any).current.setDragMode('crop');
        },
      });
    }
  }, [imageRef, maxWidth, maxHeight]);

  const handleCrop = () => {
    if (cropperRef.current) {
      const croppedImage = cropperRef.current.getCroppedCanvas().toBlob(()=>{

      });
      onCrop(croppedImage as any);
    }
  };

  return (
    <div>
      <img ref={imageRef} src={src} alt="Image to crop" />
      <button onClick={handleCrop}>Crop</button>
    </div>
  );
};

export default ImageCrop;