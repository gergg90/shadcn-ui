declare module "react-image-gallery" {
  import { ComponentType } from "react";

  interface ImageGalleryProps {
    items: Array<{
      original: string;
      thumbnail: string;
    }>;
  }

  const ImageGallery: ComponentType<ImageGalleryProps>;
  export default ImageGallery;
}
