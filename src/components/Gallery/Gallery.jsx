import Section from "@/components/BaseComponents/Section";
import GalleryWrapper from "@/components/Gallery/GalleryWrapper";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "@/sass/components/Gallery.scss";

import ImgTest1 from "@/assets/gallery-1.jpg";
import ImgTest2 from "@/assets/gallery-2.jpg";
import ImgTest3 from "@/assets/gallery-3.jpg";

import { useState } from "react";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOnImageSelect = (index) => {
    setIndex(index);
    setOpen(true);
  };

  return (
    <Section title="Galer&iacute;a">
      <GalleryWrapper>
        <button className="button" onClick={() => handleOnImageSelect(0)}>
          Open 1
        </button>
        <button className="button" onClick={() => handleOnImageSelect(1)}>
          Open 2
        </button>
        <button className="button" onClick={() => handleOnImageSelect(2)}>
          Open 3
        </button>
      </GalleryWrapper>

      <Lightbox
        plugins={[Thumbnails]}
        index={index}
        open={open}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
        close={() => setOpen(false)}
        slides={[{ src: ImgTest1 }, { src: ImgTest2 }, { src: ImgTest3 }]}
      />
    </Section>
  );
};

export default Gallery;
