import React from 'react';

const TaskListNumbers = ({data}) => {
  return (
    <div className="container-fluid">
      <div className="row g-3 stats">

        <div className="col-6 col-md-3">
          <div className="stats-box">
            <div className="stats-icon">
              <button style={{backgroundColor:'rgba(9, 0, 178, 0.35)'  ,   color:'rgb(0, 15, 178)' }}>
                <i className="fa-regular fa-clipboard"></i>
              </button>
            </div>

            <div className="same">
              <h2>{data.taskCounts.newTask}</h2>
              <p>New task</p>
              <hr style={{backgroundColor:'rgba(29, 17, 255, 0.96)'   }} />
            </div>
          </div>
        </div>


        <div className="col-6 col-md-3">
          <div className="stats-box">
            <div className="stats-icon">
              <button style={{backgroundColor:'rgba(0, 178, 68, 0.38)'  ,   color:'rgb(0, 178, 68)' }}>
                <i className="fa-regular fa-square-check"></i>
              </button>
            </div>

            <div className="same">
              <h2>{data.taskCounts.completed}</h2>
              <p>Completed</p>
              <hr style={{backgroundColor:'rgba(3, 180, 59, 0.96)'   }}  />
            </div>
          </div>
        </div>


        <div className="col-6 col-md-3">
          <div className="stats-box">
            <div className="stats-icon">
              <button style={{backgroundColor:'rgba(226, 251, 6, 0.32)'  ,   color:'rgb(218, 218, 9)' }} >
               <i className="fa-regular fa-circle-user"></i>
              </button>
            </div>

            <div className="same">
              <h2>{data.taskCounts.active}</h2>
              <p>Accepted</p>
              <hr style={{backgroundColor:'rgb(255, 247, 17)'   }}  />
            </div>
          </div>
        </div>


        <div className="col-6 col-md-3">
          <div className="stats-box">
            <div className="stats-icon">
              <button  style={{backgroundColor:'rgba(255, 21, 0, 0.21)'  ,   color:'rgb(178, 0, 0)' }} >
                <i className="fa-regular fa-clipboard"></i>
              </button>
            </div>

            <div className="same">
              <h2>{data.taskCounts.failed}</h2>
              <p>Failed</p>
              <hr style={{backgroundColor:'rgb(232, 13, 13)'   }}  />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TaskListNumbers;