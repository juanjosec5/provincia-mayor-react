import Card from "@/components/Benefits/Card";
import Cards from "@/components/Benefits/Cards";
import Section from "@/components/BaseComponents/Section";
import img1 from "@/assets/img-1.png";
import img2 from "@/assets/img-2.png";

import "@/sass/components/Benefits.scss";

const Benefits = () => {
  const cardData = [
    {
      imgPath: img2,
      title: "card title 1",
      body: "Lrem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid unde voluptas, nobis deleniti omnis quae rerum nulla illo amet quidem",
    },
    {
      imgPath: img1,
      title: "card title 2",
      body: "Lore ipsum, dolor sit amet consectetur adipisicing elit. Aliquid unde voluptas, nobis deleniti omnis quae rerum nulla illo amet quide",
    },
    {
      imgPath: img2,
      title: "card title 3",
      body: "Lorem isum, dolor sit amet consectetur adipisicing elit. Aliquid unde voluptas, nobis deleniti omnis quae rerum nulla illo amet quid",
    },
    {
      imgPath: img2,
      title: "card title 4",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid unde voluptas, nobis deleniti omnis quae rerum nulla illo amet qui",
    },
  ];

  return (
    <Section title="Por qu&eacute; escogernos" classes="benefits">
      <Cards>
        {cardData.map((card) => (
          <Card
            key={card.title}
            imgPath={card.imgPath}
            title={card.title}
            body={card.body}
          />
        ))}
      </Cards>
    </Section>
  );
};

export default Benefits;
