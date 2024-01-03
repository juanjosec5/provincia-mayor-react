const Media = ({ type, path, alt = "", format = "video/webm" }) => {
  return (
    <>
      {type === "image" && typeof path === "object" && (
        <picture>
          {path.map((sourceData, index) => {
            if (index === path.length - 1) {
              return (
                <img
                  key={sourceData.path}
                  src={sourceData.path}
                  alt={sourceData.alt}
                />
              );
            } else {
              return (
                <source
                  key={sourceData.path}
                  srcSet={sourceData.path}
                  media={sourceData.media}
                  alt={sourceData.alt}
                />
              );
            }
          })}
        </picture>
      )}
      {type === "image" && typeof path === "string" && (
        <img src={path} alt={alt} />
      )}
      {type === "video" && (
        <video>
          <source src={path} type={format} />
        </video>
      )}
    </>
  );
};

export default Media;
