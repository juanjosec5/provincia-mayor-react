import Section from "@/components/BaseComponents/Section";
import GalleryWrapper from "@/components/Gallery/GalleryWrapper";
import Media from "@/components/BaseComponents/Media";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "@/sass/components/Gallery.scss";

import { useState, useEffect } from "react";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(0);

  const imageGallery = Object.values(
    import.meta.glob("@/assets/gallery/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  );

  const thumbnailGallery = Object.values(
    import.meta.glob("@/assets/gallery/thumbnails/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  );

  useEffect(() => {
    const loadImages = () => {
      const galleryImages = imageGallery.map((img) => ({ src: img }));

      setImages(galleryImages);
    };

    loadImages();
  }, []);

  const handleOnImageSelect = (index) => {
    setIndex(index);
    setOpen(true);
  };

  return (
    <Section title="Nuestras Instalaciones" id="gallery">
      <GalleryWrapper>
        {thumbnailGallery.map((image, index) => (
          <Media
            className="gallery-thumbnail"
            onClick={() => handleOnImageSelect(index)}
            key={index}
            type="image"
            path={image}
          />
        ))}
      </GalleryWrapper>

      <Lightbox
        plugins={[Thumbnails]}
        index={index}
        open={open}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
        close={() => setOpen(false)}
        slides={images}
      />
    </Section>
  );
};

export default Gallery;
