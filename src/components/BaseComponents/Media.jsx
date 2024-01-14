const Media = ({ type, path, alt = "", format = "video/webm", ...props }) => {
  return (
    <>
      {type === "picture" && (
        <picture>
          {path.map((sourceData, index) => {
            if (index === path.length - 1) {
              return (
                <img
                  className="picture-image"
                  loading="lazy"
                  key={index}
                  src={sourceData.path}
                  alt={sourceData.alt}
                  {...props}
                />
              );
            } else {
              return (
                <source
                  key={index}
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
        <img {...props} loading="lazy" src={path} alt={alt} />
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
