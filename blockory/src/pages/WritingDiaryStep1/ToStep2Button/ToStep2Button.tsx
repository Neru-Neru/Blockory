import React from 'react'

import FlatButton from 'components/FlatButton/FlatButton'
import styles from './ToStep2Button.module.scss'

type Props = {
  onClick: () => void
}

const ToStep2Button: React.FC<Props> = (props) => {
  const { onClick } = props

  return (
    // <div className="row border py-3 mt-1 text-center h-25">
    <div className={styles.container}>
      <div className={styles.text}>
        <p>
          このどうがでいいなら、つぎにしょうさいをきめてね。
          <br />
          へんこうするなら、ブロックをうごかしてね。
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <FlatButton text="しょうさいをきめる" className={styles.button} onClick={onClick} />
      </div>
    </div>
  )
}

export default ToStep2Button
