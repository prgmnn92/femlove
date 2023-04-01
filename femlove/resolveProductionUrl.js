let productionUrl

try {
  productionUrl = new URL('https://femlove.blog/' || 'http://localhost:3000')
} catch (err) {
  console.error('Invalid productionUrl', err)
}

export function resolveProductionUrl(prev, {document}) {
  if (!productionUrl || !document.slug?.current) {
    return prev
  }
  const searchParams = new URLSearchParams()
  searchParams.set('secret', '12345' || '')
  searchParams.set('slug', document.slug.current)
  console.log(searchParams)
  return `${productionUrl.origin}/api/preview?${searchParams}`
}
