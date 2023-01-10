import { useCallback, useEffect, useRef, useState } from "react";

export type FileWithId = {
  id: string;
  img: string;
  name: string;
  size: number;
};

let imageId = 11;

export const useImages = (defaultImages?: FileWithId[]) => {
  const [images, setImages] = useState<FileWithId[]>(defaultImages || []);
  const inputRef = useRef<HTMLInputElement>(null);
  const deleteImage = useCallback((id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));

    if (inputRef?.current?.files) {
      inputRef.current.value = "";
    }
  }, []);

  const addImages: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const fileArray = Array.from(event.target.files!);

      const filesToAdd = fileArray.map((file) => ({
        id: `temporary-${++imageId}`,
        name: file.name,
        size: file.size,
        img: URL.createObjectURL(file),
      }));

      setImages((prev) => prev.concat(filesToAdd));

      if (inputRef?.current?.files) {
        inputRef.current.value = "";
      }
    },
    []
  );

  useEffect(() => {
    if (defaultImages) setImages(defaultImages);
  }, [defaultImages]);

  return { images, deleteImage, addImages, inputRef };
};
