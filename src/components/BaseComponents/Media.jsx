const Media = ({ type, path, alt = "", format = "video/webm", ...props }) => {
  return (
    <>
      {type === "image" && typeof path === "object" && (
        <picture>
          {path.map((sourceData, index) => {
            if (index === path.length - 1) {
              return (
                <img
                  loading="lazy"
                  key={sourceData.path}
                  src={sourceData.path}
                  alt={sourceData.alt}
                  {...props}
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
