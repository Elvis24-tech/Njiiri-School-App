const Section = ({ id, title, content, dark }) => {
    return (
      <section id={id} className={`section ${dark ? 'dark' : ''}`}>
        <h2>{title}</h2>
        <p>{content}</p>
      </section>
    );
  };
  
  export default Section;
  