import { Metadata } from "next"

type Props = {
    params: Promise <{ projectId: string }>
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).projectId;
  
  return {
    title: `Project ${productId}`,
  }
}

export default async function Project_details( {params}: Props){
        const projectId = (await params).projectId
        return (
            <h1>Project details {projectId}</h1>
        )
}