import { Icon } from './Icons'

interface Props {
  title: string,
  description: string,
  url: string,
  srcUrl: string,
  svg: any,
}

export function Card(props: Props) {
  const { title, description, url, srcUrl, svg} = props
  return (
    <div className="project-card">
      <div className="project-card-front text-gray-100 fill-teal-600 dark:fill-stone-800 dark:text-stone-900">
        <Icon iconName={svg} />
      </div>
    </div>
  )
}
