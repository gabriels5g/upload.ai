import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { genetareAiCompletion } from "./routes/generate-ai-completion";

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(genetareAiCompletion)


app.listen({
  port: 8080
}).then(() => {
  console.log('HTTP Server Running!🌙')
})