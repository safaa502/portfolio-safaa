const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/safaa502">
        <i className="fa-brands fa-github" aria-hidden="true" title="Safaa El Harras' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/safaa-el-harras-950225253/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Safaa El Harras' LinkedIn Profile"></i>
      </a>
      
      
    </div>
  );
};

export default SocialIcons;
