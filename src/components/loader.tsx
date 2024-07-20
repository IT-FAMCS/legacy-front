function Loader() {
  return (
    <>
      <div className="loading">
        <figure>
          <img
            alt="loading"
            width="300"
            height="300"
            src={"./raccoon-loading.gif"}
          />
          <figcaption>Загрузка...</figcaption>
        </figure>
      </div>
    </>
  );
}

export default Loader;
