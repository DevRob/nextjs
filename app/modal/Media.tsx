import Image from 'next/image'

import transform from '../../public/webp/transform.webp'
import email from '../../public/webp/email.webp'
import map from '../../public/webp/Google-App.webp'
import tictactoe from '../../public/webp/ttt.webp'
import frogger from '../../public/webp/frogger.webp'
import asteroid from '../../public/webp/asteroid.webp'

type Images = 'transform' | 'email' | 'map' | 'tictactoe' | 'frogger' | 'asteroid' // all the supported Images

const getImageFromName = (imageName: string) => {
  switch (imageName) {
    case 'transform':
      return <Image alt="transform" src={transform} fill style={{ objectFit: "cover" }} />
    case 'email':
      return <Image alt="email" src={email} fill style={{ objectFit: "cover" }} />
    case 'map':
      return <Image alt="map" src={map} fill style={{ objectFit: "cover" }} />
    case 'tictactoe':
      return <Image alt="tictactoe" src={tictactoe} fill style={{ objectFit: "cover" }} />
    case 'frogger':
      return <Image alt="frogger" src={frogger} fill style={{ objectFit: "cover" }} />
    case 'asteroid':
      return <Image alt="asteroid" src={asteroid} fill style={{ objectFit: "cover" }} />
  }
}

export function Media ({ imageName }: { imageName: Images }) {
  const image = getImageFromName(imageName)

  return (
    <>
      {image}
    </>
  )
}
