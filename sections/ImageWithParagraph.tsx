import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  title?: string;
  /** @format textarea */
  description?: string;
  tagline?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col md:flex-row-reverse",
  right: "flex-col md:flex-row",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  tagline = "Tagline",
  image = DEFAULT_IMAGE,
  placement = "left",
  disableSpacing,
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", style: "Outline" },
    { id: "change-me-2", href: "/", text: "Change me", style: "Ghost" },
  ],
}: Props) {

  // Serializa as props em uma string de query params
  const queryParams = new URLSearchParams({
    title,
    description,
    tagline,
    image,
    placement,
    disableSpacing,
    cta: JSON.stringify(cta),  // Serializa o array cta como JSON
  }).toString();

  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
     <div class="box sample-transition" 
         hx-trigger="revealed" 
         hx-swap="outerHTML" 
         hx-get={`/home/ImageWithParagraph?${queryParams}`}>
          Trocando de conteudo
    </div>
     </div>
  );
}
