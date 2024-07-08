interface Props {
  title: string
}

export function Label({ title }: Props) {
  return (
    <div className="bg-light-200 dark:bg-dark-200 py-2 px-5 rounded-xl text-center w-fit m-auto">
      <p className="text-light-600 dark:text-dark-600 text-sm font-medium lg:text-base">
        {title}
      </p>
    </div>
  )
}
