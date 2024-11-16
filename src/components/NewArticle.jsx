export const NewArticle = ({title, text}) => {
  return (
    <article className="h-[140px] border-b-2 border-GrayishBlue py-7 last:border-none">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold" >{title}</h2>
        <p className="text-[15px]">{text}</p>
    </article>
  )
}
