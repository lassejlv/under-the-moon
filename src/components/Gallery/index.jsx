export default function Gallery() {
  return (
    <>
      {Array.from({ length: 13 }).map((_, index) => (
        <div key={index} className="gallery-item">
          <img
            src={`/gallery/image${index + 1}.jpeg`}
            alt={`Gallery item ${index + 1}`}
          />
        </div>
      ))}
    </>
  );
}
