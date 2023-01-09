import React, { useMemo } from "react";
import { imageExtensions } from "src/constants";
import { useImages } from "src/hooks/useImages";
import "./ImagesInput.scss";

const ImagesInput = ({
  images,
  inputRef,
  addImages,
  deleteImage,
}: ReturnType<typeof useImages>) => {
  console.log("images ::: ", images);

  const accept = useMemo(
    () =>
      `${imageExtensions.JPG},${imageExtensions.PNG},${imageExtensions.GIF},${imageExtensions.BMP}`,
    []
  );

  return (
    <div className="images_input_wrapper">
      <label>상품 이미지 (최대 5개 추가 가능)</label>
      <button
        type="button"
        className="images_input_btn"
        onClick={() => {
          console.log("inputRef.current :::: ", inputRef.current);
          inputRef.current?.click();
        }}
      >
        이미지 추가하기
      </button>
      <input
        type="file"
        className="fileInput"
        title="파일추가"
        multiple
        hidden
        // style={{ visibility: "hidden" }}
        accept={accept}
        onChange={addImages}
        ref={inputRef}
      />
      <div className="images_list_wrapper">
        {images.map((image) => (
          <div key={image.id}>
            <div className="images_input_img_wrapper">
              <img className="img" src={image.img} />
              <ul>
                <li>{image.name}</li>
                <li>{(image.size / 1000000).toFixed(3)}Mb</li>
                <li
                  onClick={() => {
                    deleteImage(image.id);
                  }}
                >
                  삭제하기
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesInput;
