import Image from "next/image";

type modelProperties = {
  name: string;
  image: string;
  description: string;
};

interface Props {
  model: modelProperties;
}

const ModelCard = ({ model }: Props) => {
  return (
    <div className="group bg-card relative h-full cursor-default overflow-hidden rounded-2xl p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="bg-muted relative overflow-hidden rounded-2xl">
        <Image
          width={500}
          height={500}
          src={model.image}
          alt={model.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="from-background/90 via-background/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="relative mt-4">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-xl font-bold">{model.name}</h3>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed font-extralight 2xl:text-lg">
          {model.description}
        </p>
      </div>

      <div className="group-hover:border-primary/50 pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500" />
    </div>
  );
};

export default ModelCard;
