const Service = ({ icon, title, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className={title}>saving money</h4>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </p>
      </div>
    </article>
  );
};
export default Service;
