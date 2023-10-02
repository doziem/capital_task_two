import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src={require('./images/dotIcon.png')}
        alt="home Icon"
        width={'32px'}
        height={'32px'}
        className="dotIcon"
      />
      <img
        src={require('./images/homeIcon.png')}
        alt="home Icon"
        width={'24px'}
        height={'24px'}
        className="homeIcon"
      />
      <img
        src={require('./images/users.png')}
        alt="home Icon"
        width={'24px'}
        height={'24px'}
        className="homeIcon"
      />
      <img
        src={require('./images/calendar.png')}
        alt="home Icon"
        width={'24px'}
        height={'24px'}
        className="homeIcon"
      />
      <img
        src={require('./images/share.png')}
        alt="home Icon"
        width={'24px'}
        height={'24px'}
        className="homeIcon"
      />
      <div className="document">
        <img
          src={require('./images/document.png')}
          alt="home Icon"
          width={'24px'}
          height={'24px'}
          color="blue !important"
          className="homeIcon"
        />
      </div>

      <img
        src={require('./images/notebook.png')}
        alt="home Icon"
        width={'24px'}
        height={'24px'}
        // className="ntIcon"
        className="homeIcon"
      />

      <img
        src={require('./images/Heart_01.png')}
        alt="home Icon"
        width={'24px'}
        height={'24px'}
        // className="ntIcon"
        className="homeIcon"
      />

      <img
        src={require('./images/chevron.png')}
        alt="home Icon"
        width={'24px'}
        height={'24px'}
        className="homeIcon"
      />
      <div className="setting">
        <img
          src={require('./images/settingIcon.png')}
          alt="home Icon"
          width={'24px'}
          height={'24px'}
        />

        <img
          src={require('./images/asIcon.png')}
          alt="home Icon"
          width={'24px'}
          height={'24px'}
          className="asIcon"
        />
      </div>
    </div>
  );
};

export default Sidebar;
