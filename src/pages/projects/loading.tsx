const Skeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-16">
      <div className="h-3 bg-loading-color rounded col-span-1"></div>
      <div className="h-3 bg-loading-color rounded col-span-2"></div>
    </div>
  )
}

export default function Loading() {
  const n = 15
  return (
    <div className="animate-pulse rounded-md px-10 mt-10 md:mt-16 container mx-auto mb-4 lg:mb-6 space-y-6 md:space-y-8">
      {
        [...Array(n)].map((i) => <Skeleton key={i}/>)
      }
    </div>
  )
}