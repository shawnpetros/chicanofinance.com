import React from 'react';

function Content() {
  return (
    <div>
      <div className="container content">
        <div className="row">
          <div className="col-sm-3 talk">

            <h1>Chicano</h1>
            <h1>Finance</h1>
            <br />
            <h6 className="bold-four">
             LatinX parent's aren't the best at talking about hard things, so I'm compiling a repository of abuela's advice, will less chancla. Join me to hear more about it!
            </h6>
            <br />
            <h6><button className="btn btn-dark start start-two">Coming Soon!</button></h6>
          
          </div>
          <div className="col-sm-9 showcase-img">
            {/* <div className="circle"></div> */}
          </div>
        </div>
      </div>

      <section className="features-icons bg-light text-center det-ails">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex  icon-bra-ails">
                  <i className="icon-screen-desktop m-auto text-primary icon-ails" />
                </div>
                <h5>Finance for LatinX Millenials</h5>
                <p className="lead mb-0">Learning the lessons our parent's didn't (or couldn't) teach us.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex  icon-bra-ails">
                  <i className="icon-layers m-auto text-primary icon-ails" />
                </div>
                <h5>Abuela was Right</h5>
                <p className="lead mb-0">Even if we all thought she was crazy...</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex  icon-bra-ails">
                  <i className="icon-check m-auto text-primary icon-ails" />
                </div>
                <h5>Making Cents of the World</h5>
                <p className="lead mb-0">Simple tips, tricks, and hopefully entertaining tidbits about personal finance from the LatinX point of view.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
