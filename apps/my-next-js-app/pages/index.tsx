import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          {/* <div className="header-container">
            <div></div>
          </div> */}
          <div id="welcome" className='header'>
              <h5>Albertsons</h5>
          </div>


          <div id="body">
            <div>H&W Body Content</div>
          </div>

          <div id="footer">
            Footer Content
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
