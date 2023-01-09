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
  const accept = useMemo(
    () =>
      `${imageExtensions.JPG},${imageExtensions.PNG},${imageExtensions.GIF},${imageExtensions.BMP}`,
    []
  );

  return (
    <div className="images_input_wrapper">
      <label>상품 이미지 (최대 9개 추가 가능)</label>
      <div className="btn_wrapper">
        <button
          type="button"
          className="images_input_btn"
          disabled={images.length >= 9}
          onClick={() => {
            if (images.length >= 9) return;
            inputRef.current?.click();
          }}
        >
          이미지 추가하기
        </button>
        {images.length === 0 && <span>1 - 9개의 이미지를 등록해주세요.</span>}
      </div>

      <input
        type="file"
        className="fileInput"
        title="파일추가"
        // multiple
        hidden
        // style={{ visibility: "hidden" }}
        accept={accept}
        maxLength={5}
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
