import { useValidatedBody, z } from 'h3-zod'

export default eventHandler(async (event) => {
  const { title } = await useValidatedBody(event, {
    title: z.string().min(1).max(100)
  })
  // const session = await requireUserSession(event)

  // List todos for the current user
  const todo = await useDb().insert(tables.todos).values({
    userId: 123,
    title,
    createdAt: new Date()
  }).returning().get()

  return todo
})