import GoogleMap from '../../public/svg/map.svg'
import Game from '../../public/svg/game.svg'
import TicTacToe from '../../public/svg/ttt.svg'
import Transform from '../../public/svg/transform.svg'
import Asteroid from '../../public/svg/spaceship.svg'
import Email from '../../public/svg/email.svg'

type Icons = 'map' | 'game' | 'ttt' | 'transform' | 'spaceship' | 'email' // all the supported icons

const getIconFromName = (iconName: Icons) => {
  switch (iconName) {
    case 'map':
      return <GoogleMap />
    case 'game':
      return <Game />
    case 'ttt':
      return <TicTacToe />
    case 'transform':
      return <Transform />
    case 'spaceship':
      return <Asteroid />
    case 'email':
      return <Email />

  }
}

export function Icon ({ iconName }: { iconName: Icons }) {
  const icon = getIconFromName(iconName)

  return (
    <>
      {icon}
    </>
  )
}
