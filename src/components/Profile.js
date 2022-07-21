/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import './Profile.css';
import { useSelector } from 'react-redux';
import React from 'react';
/*
  PROFILE SHOULD SHOW ONLY RESERVED MISSIONS
*/

const Profile = () => {
  const { missions, joinedMissions } = useSelector((state) => state.missions);
  const rock = useSelector((state) => state.rockets);
  const reservedRocket = rock.filter((book) => book.reserved === true);
  return (
    <div>
      <div>
        {missions.map((mission) => {
          if (joinedMissions.includes(mission.mission_id)) {
            return (
              <div key={mission.mission_id}>{mission.mission_name}</div>
            );
          }
        })}
        { joinedMissions.length === 0 ? 'Currently no missions!' : 'Enjoy your mission!'}
      </div>
      <div>
        <h1>MY Rockets</h1>
        <table>
          <thead><tr><th>MY Rockets</th></tr></thead>
          <tbody>
            <tr>
              <td>
                {
            reservedRocket.map((rocket) => {
              const { name } = rocket;
              return (
                <>
                  <h3>{name}</h3>
                </>
              );
            })
              }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
