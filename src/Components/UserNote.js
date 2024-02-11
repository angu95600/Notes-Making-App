import React from 'react'
import styles from './UserNote.module.css'

function UserNote({time,notes}) {

  const date = new Date(time); 
  
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

  
  const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-UK', dateOptions);



  return (
    <div className={styles.UserNote}>
        <div className={styles.timeStamp}>
            <div className={styles.time}>{formattedTime}</div>
            <div className={styles.date}>{formattedDate}</div>
        </div>
        <div className={styles.content}>
          {notes}
        </div>
    </div>
  )
}

export default UserNote