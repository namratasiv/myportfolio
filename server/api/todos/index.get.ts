import { eq } from 'drizzle-orm'

export default eventHandler(async (event) => {
  //const session = await requireUserSession(event)

  // List todos for the current user
  const todos = await useDb().select().from(tables.todos).where(eq(tables.todos.userId, 123)).all()

  return todos
})