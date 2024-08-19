import type { ImageWidget } from "apps/admin/widgets.ts";


export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}



export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  
   // Serializa as props em uma string de query params
   const queryParams = new URLSearchParams({
    title,
    image,
    description,
    placement,
    cta: JSON.stringify(cta),  // Serializa o array cta como JSON
  }).toString();
  
  return (
    <nav class="lg:container lg:mx-auto mx-4 teste">
      <div class="box sample-transition" 
         hx-trigger="revealed" 
         hx-swap="outerHTML" 
         hx-get={`/home/Hero?${queryParams}`}>
          Trocando de conteudo
    </div>
      
    </nav>
  );
}
