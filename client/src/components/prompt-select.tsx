import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { api } from "@/lib/api";

interface Prompt {
  id: string
  title: string
  template: string
}

interface PromptSelectProps {
  onPromptSelected: (template: string) => void
}

export function PromptSelect(props: PromptSelectProps) {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null)

  useEffect(() => {
    api.get('/prompts').then(response => {
      setPrompts(response.data)
    })
  }, [])

  function handlePromptSelected(promptId: string) {
    const selectPrompt = prompts?.find(prompt => prompt.id === promptId)

    if(!selectPrompt) {
      return
    }
    props.onPromptSelected(selectPrompt.template)
  }
  return (
  <Select onValueChange={handlePromptSelected}>
    <SelectTrigger>
      <SelectValue placeholder="Selecione um promp..."/>
    </SelectTrigger>
    <SelectContent>
      {prompts?.map(prompt => {
        return (
          <SelectItem key={prompt.id} value={prompt.id}>{prompt.title}</SelectItem>
        )
      })}
      {/* <SelectItem value="description">Musicas da Juh</SelectItem>
      <SelectItem value="title">Titulo do Youtube</SelectItem> */}
    </SelectContent>
  </Select>
  )
}