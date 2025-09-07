export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Forward the GraphQL request to the CMS
  const response = await $fetch('http://smartcraft-cms.test/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  
  return response
})
