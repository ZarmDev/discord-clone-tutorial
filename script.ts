import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
          email: 'hana@prisma.io',
          name: 'Hana',
          posts: {
            create: [
              {
                title: 'First blog post about Prisma and Azure SQL',
                published: true,
              },
              {
                title: 'Azure Functions and the serverless paradigm',
                published: false,
              },
            ],
          },
        },
      })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })