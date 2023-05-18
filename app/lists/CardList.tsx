import CardModal from '../modal/CardModal'

type Props = {
  title: string,
  description: string,
  url: string,
  srcUrl: string,
  svg: string,
  media: string,
}

type Items = {
  items: Array<Props>
}

export default function CardList(props: Items) {
  return (
    <ul className="p-0 flex flex-wrap flex-col items-center justify-center md:flex-row gap-10 mt-5 max-w-3xl mx-auto">
      {props.items.map(({title, description, url, srcUrl, svg, media}, index) => {
        return <li key={index.toString()}>
          <CardModal
            title={title}
            description={description}
            url={url}
            srcUrl={srcUrl}
            svg={svg}
            media={media}
          />
        </li>
      })}
    </ul>
  )
}
